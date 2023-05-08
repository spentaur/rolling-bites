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
import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import Fuse from "fuse.js";
import { Link } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";
const data = require("../content/data/trucks.json");
const options = {
  includeScore: true,
  findAllMatches: true,
  includeMatches: true,
  threshold: 0.3,
  keys: ["name", "path", "location", "tags"],
};
const fuse = new Fuse(data, options);
const promotedFuse = new Fuse(data, { keys: ["id"] });

const min = 1;
const max = 7;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Search = (props: Props) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredPeople = query === "" ? [] : fuse.search(query, { limit: 5 });
  const promoted = promotedFuse.search(`${randomInt}`)[0];

  return (
    <Combobox
      onChange={(truck) => {
        props.setOpen(false);
        navigate(truck.item.path);
      }}
    >
      <div className="relative">
        <MagnifyingGlassIcon
          className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
        <Combobox.Input
          className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
          placeholder="Truck name..."
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(truck) => truck?.item.name}
        />
      </div>

      {filteredPeople.length > 0 && (
        <Combobox.Options
          static
          className="max-h-96 scroll-py-3 bg-white overflow-y-auto p-3"
        >
          {filteredPeople.map((truck) => (
            <Combobox.Option
              key={truck.item.id}
              value={truck}
              className={({ active }) =>
                classNames(
                  "flex cursor-default select-none rounded-xl p-3",
                  active && "bg-gray-100"
                )
              }
            >
              {({ active }) => (
                <>
                  <img
                    src={truck.item.avatar}
                    alt=""
                    className="h-6 w-6 object-contain flex-none rounded-full"
                  />
                  <span className="ml-3 flex-auto truncate">
                    {truck.item.name}
                  </span>
                </>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}

      {query !== "" && filteredPeople.length === 0 && (
        <div className="py-14 px-6 text-center text-sm sm:px-14">
          <ExclamationCircleIcon
            type="outline"
            name="exclamation-circle"
            className="mx-auto h-6 w-6 text-gray-400"
          />
          <p className="mt-4 font-semibold text-gray-900">No results found</p>
          <p className="mt-2 text-gray-500">
            No trucks found for this search term. Please try again.
          </p>
        </div>
      )}
      {/* <div className="py-2.5 px-4">
        <div className="text-xs text-semibold text-logo-green-300">
          Promoted:
        </div>
        <Link
          to={promoted.item.path}
          className="flex hover:bg-gray-100 rounded-xl p-3 cursor-default"
        >
          <img
            src={promoted.item.avatar}
            alt=""
            className="h-10 w-10 object-contain flex-none rounded-full"
          />
          <div className="">
            <div className="ml-3">{promoted.item.name}</div>
            <div className="ml-3 text-xs text-gray-500">
              {promoted.item.about.description}
            </div>
          </div>
        </Link>
      </div> */}
      <div className="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs">
        <Link to="/search" className="text-blue-500 hover:underline">
          Advanced Search
        </Link>
      </div>
    </Combobox>
  );
};
