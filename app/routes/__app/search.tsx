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
import { Dialog, Disclosure, Transition, Combobox } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Datepicker from "react-tailwindcss-datepicker";

const cities = [
  { id: 1, name: "Champaign, IL" },
  { id: 2, name: "Urbana, IL" },
  { id: 3, name: "Rantoul, IL" },
  { id: 4, name: "Savoy, IL" },
  { id: 5, name: "Mahomet, IL" },
];

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Search() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  const [selected, setSelected] = useState(null);
  const [query, setQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredCities =
    query === ""
      ? cities
      : cities.filter((city) =>
          city.name
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
              <form className="">
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
                    <Combobox value={selected} onChange={setSelected} nullable>
                      <div className="relative mt-1">
                        <div className="relative w-full cursor-default overflow-hidden rounded-md text-left">
                          <Combobox.Input
                            className="w-full border-none text-left rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6 "
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Castle Rock, ME"
                            displayValue={(city) => city?.name}
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
                                        {city.name}
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
                      id="start"
                      className="w-full text-left rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm sm:leading-6"
                      name="trip-start"
                    />
                  </div>
                </div>
                <div className="pb-6">
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="rounded-md bg-logo-green-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-logo-green-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">{/* Your content */}</div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
