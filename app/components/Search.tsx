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
import { Link, useSearchParams } from "@remix-run/react";
import { useNavigate } from "@remix-run/react";

const data = require("../data/trucks.json");
const options = {
  includeScore: true,
  findAllMatches: true,
  includeMatches: true,
  threshold: 0.3,
  keys: ["name", "path", "about.location", "about.tags"],
};
const fuse = new Fuse(data, options);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const filteredPeople = query === "" ? [] : fuse.search(query);

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => {
          setOpen(false);
          setSearchParams("");
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-80 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={(truck) => navigate(truck.item.path)}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {filteredPeople.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-96 scroll-py-3 overflow-y-auto p-3"
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
                              className="h-6 w-6 flex-none rounded-full"
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
                    <p className="mt-4 font-semibold text-gray-900">
                      No results found
                    </p>
                    <p className="mt-2 text-gray-500">
                      No trucks found for this search term. Please try again.
                    </p>
                  </div>
                )}
                <div className="flex flex-wrap items-center bg-gray-50 py-2.5 px-4 text-xs">
                  <Link to="/search" className="text-blue-500 hover:underline">
                    Advanced Search
                  </Link>
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};