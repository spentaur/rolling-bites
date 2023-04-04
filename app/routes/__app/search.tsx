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
import { Fragment, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useActionData, Form, useTransition } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node"; // or cloudflare/deno

const cities = [
  "Champaign, IL",
  "Urbana, IL",
  "Rantoul, IL",
  "Savoy, IL",
  "Mahomet, IL",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Search() {
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const transition = useTransition();
  const actionData = useActionData<typeof action>();

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
                  {actionData && actionData.errors.description ? (
                    <p style={{ color: "red" }}>
                      {actionData.errors.description}
                    </p>
                  ) : null}

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
                            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                      Date
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="date"
                        name="date"
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
                      />
                    </div>
                  </div>
                  <div className="pb-6">
                    <div className="relative flex items-start">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          aria-describedby="comments-description"
                          name="openNow"
                          type="checkbox"
                          value="true"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Open Now
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
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
