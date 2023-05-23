/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Transition, Combobox } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import {
  Form,
  useTransition,
  useLoaderData,
  useSearchParams,
  Link,
} from "@remix-run/react";
import type { LoaderArgs, LoaderFunction } from "@remix-run/cloudflare";
// import { json } from "@remix-run/cloudflare";
import Fuse from "fuse.js";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import {
  trucks,
  menuSections,
  menuItems,
  scheduleItems,
  locations,
} from "~/db/schema";
import { and, asc, desc, eq, inArray, like, sql, gte, lte } from "drizzle-orm";
import { getDbFromContext } from "~/db/db.service.server";
const { DateTime } = require("luxon");

function formatDate(dateString) {
  const date = new Date(dateString);

  // Define an array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Define an array of suffixes for the day
  const daySuffixes = ["st", "nd", "rd", "th"];

  // Get the day, month, and year
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  // Get the day suffix based on the day
  let daySuffix;
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = daySuffixes[0];
  } else if (day === 2 || day === 22) {
    daySuffix = daySuffixes[1];
  } else if (day === 3 || day === 23) {
    daySuffix = daySuffixes[2];
  } else {
    daySuffix = daySuffixes[3];
  }

  // Get the weekday name
  const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

  // Format the final date string
  const formattedDate = `${weekday}, ${monthNames[month]} ${day}${daySuffix}, ${year}`;

  return formattedDate;
}

function convertTime(timeStr, timezone) {
  const dt = DateTime.local().setZone(timezone).toISODate();
  // Parse the string into a Date object
  var specifyOffsetAndOverrideZone = DateTime.fromSQL(`${dt} ` + timeStr, {
    zone: timezone,
  });
  specifyOffsetAndOverrideZone = specifyOffsetAndOverrideZone.setZone("GMT");

  // Format the hours and minutes, adding leading zeros as necessary
  let hours = specifyOffsetAndOverrideZone.hour;
  let minutes = specifyOffsetAndOverrideZone.minute;

  // Combine and return the result
  return hours + ":" + minutes;
}

export const loader = async ({ context, params, request }: LoaderArgs) => {
  const db = getDbFromContext(context);
  const url = new URL(request.url);
  const search = new URLSearchParams(url.search);
  // Main filter function
  if (search.toString()) {
    const searchParams = {
      city: search.get("city"),
      location: search.get("location"),
      keywords: search.get("keywords"),
      date: search.get("date"),
      time: search.get("time"),
      privateEvents: search.get("privateEvents"),
    };
    const truckData = require("~/content/data/trucks.json");
    const options = {
      keys: ["tags", "name", "path"],
      findAllMatches: true,
      threshold: 0.3,
    };
    const fuse = new Fuse(truckData, options);
    // Step 1: Search using Fuse.js based on keyword input
    let keywordResults;
    let searchQuery = [];

    if (searchParams.keywords) {
      keywordResults = fuse.search(searchParams.keywords);
      let ids = keywordResults.map((obj) => obj.item.id);
      if (ids.length > 0) {
        searchQuery.push(inArray(trucks.id, ids));
      } else {
        return null;
      }
    }
    if (searchParams.privateEvents) {
      searchQuery.push(eq(trucks.privateEvents, 1));
    }

    const searchQuerySchedule = [];

    if (searchParams.location) {
      const citiesSearch = await db
        .select()
        .from(locations)
        .where(eq(locations.name, searchParams.location))
        .get();

      if (citiesSearch) {
        searchQuerySchedule.push(
          eq(scheduleItems.location_id, citiesSearch["id"])
        );
      }
    }

    if (searchParams.date) {
      searchQuerySchedule.push(
        eq(scheduleItems.dateString, formatDate(searchParams.date))
      );
    }

    if (searchParams.time) {
      const searchTime = convertTime(searchParams.time, request.cf.timezone);
      searchQuerySchedule.push(
        sql`time(datetime("datetimeOpen", 'unixepoch')) <= ${searchTime}`
      );
      searchQuerySchedule.push(
        sql`${searchTime} <= time(datetime("datetimeClose", 'unixepoch'))`
      );
    }

    if (searchParams.location || searchParams.date || searchParams.time) {
      const unixTimestamp = Math.floor(Date.now() / 1000);
      const twoWeeksFromNowInSeconds = unixTimestamp + 1684208653;
      searchQuerySchedule.push(
        lte(scheduleItems.datetimeClose, twoWeeksFromNowInSeconds)
      );
      searchQuerySchedule.push(gte(scheduleItems.datetimeClose, unixTimestamp));
      const result = await db
        .select()
        .from(scheduleItems)
        .where(and(...searchQuerySchedule))
        .all();
      console.log(convertTime(searchParams.time, request.cf.timezone));
      let truckIds = result.map((obj) => obj.truck_id);
      if (truckIds.length > 0) {
        searchQuery.push(inArray(trucks.id, truckIds));
      } else {
        return null;
      }
    }

    const result = await db
      .select()
      .from(trucks)
      .where(and(...searchQuery))
      .limit(20)
      .all();
    if (!result) {
      throw new Response("What a joke! Not found.", { status: 404 });
    }

    return result;
  }

  return null;
};

export default function Search() {
  const [selected, setSelected] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [query, setQuery] = useState("");
  const [queryLocation, setQueryLocation] = useState("");
  const transition = useTransition();
  const data = useLoaderData();
  const [params] = useSearchParams();

  useEffect(() => {
    params.get("city") && setSelected(params.get("city"));
  }, [params]);
  useEffect(() => {
    params.get("location") && setSelectedLocation(params.get("location"));
  }, [params]);
  const locations = require("~/content/data/locations.json");
  const cities = require("~/content/data/cities.json");
  const filteredLocations =
    queryLocation === ""
      ? locations
      : locations.filter((location) =>
          location
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(queryLocation.toLowerCase().replace(/\s+/g, ""))
        );
  const filteredCities =
    query === ""
      ? cities
      : cities.filter((city) =>
          city
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="bg-white">
      <div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between py-4">
            <h1 className="text-xl font-bold tracking-tight text-gray-900">
              Advanced Search
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="py-6">
            <h2 id="products-heading" className="sr-only">
              Trucks
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <Form method="get" action="/search">
                <fieldset disabled={transition.state === "submitting"}>
                  <h3 className="sr-only">Categories</h3>

                  <div>
                    <label
                      htmlFor="keywords"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Keywords
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="keywords"
                        id="keywords"
                        className="w-full text-left rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
                        placeholder="Fried Chicken"
                        defaultValue={params.get("keywords")}
                      />
                    </div>
                  </div>
                  <div className="py-6">
                    <label
                      htmlFor="keywords"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <Combobox
                        value={selected}
                        onChange={setSelected}
                        name="city"
                        nullable
                      >
                        <div className="relative mt-1">
                          <div className="relative w-full cursor-default overflow-hidden rounded-md text-left">
                            <Combobox.Input
                              className="w-full border-none text-left rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6 "
                              onChange={(event) => setQuery(event.target.value)}
                              placeholder="Castle Rock, ME"
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </Combobox.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQuery("")}
                          >
                            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {filteredCities.length === 0 && query !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredCities.map((city) => (
                                  <Combobox.Option
                                    key={city.id}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-teal-600 text-white"
                                          : "text-gray-900"
                                      }`
                                    }
                                    value={city}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {city}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                              active
                                                ? "text-white"
                                                : "text-teal-600"
                                            }`}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Combobox.Option>
                                ))
                              )}
                            </Combobox.Options>
                          </Transition>
                        </div>
                      </Combobox>
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="keywords"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <Combobox
                        value={selectedLocation}
                        onChange={setSelectedLocation}
                        name="location"
                        nullable
                      >
                        <div className="relative mt-1">
                          <div className="relative w-full cursor-default overflow-hidden rounded-md text-left">
                            <Combobox.Input
                              className="w-full border-none text-left rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6 "
                              onChange={(event) =>
                                setQueryLocation(event.target.value)
                              }
                              placeholder="Ten Forward"
                            />
                            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </Combobox.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            afterLeave={() => setQueryLocation("")}
                          >
                            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {filteredLocations.length === 0 &&
                              queryLocation !== "" ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                  Nothing found.
                                </div>
                              ) : (
                                filteredLocations.map((location) => (
                                  <Combobox.Option
                                    key={location.id}
                                    className={({ active }) =>
                                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                        active
                                          ? "bg-teal-600 text-white"
                                          : "text-gray-900"
                                      }`
                                    }
                                    value={location}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`block truncate ${
                                            selected
                                              ? "font-medium"
                                              : "font-normal"
                                          }`}
                                        >
                                          {location}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                              active
                                                ? "text-white"
                                                : "text-teal-600"
                                            }`}
                                          >
                                            <CheckIcon
                                              className="h-5 w-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Combobox.Option>
                                ))
                              )}
                            </Combobox.Options>
                          </Transition>
                        </div>
                      </Combobox>
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Date
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="date"
                        name="date"
                        defaultValue={params.get("date")}
                        className="w-full text-left rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <label
                      htmlFor="keywords"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Time
                    </label>
                    <div className="mt-2">
                      <input
                        type="time"
                        id="time"
                        className="w-full text-left rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
                        name="time"
                        defaultValue={params.get("time")}
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <div className="flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="privateEvents"
                          type="checkbox"
                          value="true"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          defaultChecked={
                            params.get("privateEvents") === "true"
                          }
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Private Events
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="pb-6">
                    <div className="mt-2">
                      <button
                        type="submit"
                        className="rounded-md bg-logo-green-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-logo-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        {transition.state === "submitting"
                          ? "Searching..."
                          : "Search"}
                      </button>
                    </div>
                  </div>
                </fieldset>
              </Form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* if data present */}
                {data && data.length > 0 ? (
                  <ul className="max-w-xl mx-auto">
                    {data.map((item) => (
                      <li
                        key={item.id}
                        className="flex hover:bg-gray-100 select-none rounded-xl p-3"
                      >
                        <Link
                          to={`/${item.path}`}
                          className="flex hover:bg-gray-100 rounded-xl p-3"
                        >
                          <img
                            src={item.avatar}
                            alt=""
                            className="h-14 w-14   object-contain flex-none rounded-full"
                          />
                          <div className="">
                            <div className="ml-3">{item.name}</div>
                            <div className="ml-3 text-xs text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  params.toString() !== "" && (
                    <div className="py-14 px-6 text-center text-sm sm:px-14">
                      <ExclamationCircleIcon
                        type="outline"
                        name="exclamation-circle"
                        className="mx-auto h-6 w-6 text-gray-400"
                      />
                      <p className="mt-4 font-semibold text-gray-900">
                        No results found
                      </p>
                      <p className="mt-2 text-gray-500">
                        No trucks found for this search term. Please try again.
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
