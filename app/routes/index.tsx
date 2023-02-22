/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomRightIcon,
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentChartBarIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XMarkIcon,
  PlusCircleIcon,
  EllipsisHorizontalIcon,
  ClipboardIcon,
  GlobeAltIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  UsersIcon,
  ChevronRightIcon,
  AtSymbolIcon,
  BellAlertIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  BellIcon as BellIconSolid,
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Search", href: "#", icon: MagnifyingGlassIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
];
const secondaryNavigation = [
  { name: "Settings", href: "#", icon: CogIcon },

  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];
const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-green-100 text-green-800",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};
const tabs = [
  { name: "About", href: "#", current: true },
  { name: "Schedule", href: "#", current: false },
  { name: "Menu", href: "#", current: false },
  { name: "Reviews", href: "#", current: false },
  { name: "Photos", href: "#", current: false },
  { name: "Inspections", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [alertActive, setAlertActive] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        {/* Off-canvas menu for mobile, show/hide based on off-canvas menu state. */}
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                      <div className="flex h-full flex-1 flex-col bg-white">
                        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                          <div className="flex flex-shrink-0 items-center px-4">
                            <img
                              className="h-8 w-auto"
                              src="/images/logo-simple.svg"
                              alt="Rolling Bites"
                            />
                          </div>
                          <nav
                            className="mt-3 flex flex-1 flex-col divide-y divide-gray-100 overflow-y-auto"
                            aria-label="Sidebar"
                          >
                            <div className="space-y-1 py-2 px-2">
                              {navigation.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-gray-500"
                                        : "text-gray-400 group-hover:text-gray-500",
                                      "mr-3 flex-shrink-0 h-6 w-6"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              ))}
                            </div>
                            <div className="mt-6 pt-6">
                              <div className="space-y-1 px-2">
                                {secondaryNavigation.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                  >
                                    <item.icon
                                      className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </nav>
                        </div>
                        <div className="flex flex-shrink-0 p-4">
                          <a
                            href="#"
                            className="group block w-full flex-shrink-0"
                          >
                            <div className="flex items-center">
                              <div>
                                <img
                                  className="inline-block h-9 w-9 rounded-full"
                                  src="https://spenceradams.co/me.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                  Spencer Adams
                                </p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="/images/logo-simple.svg"
                  alt="Rolling Bites"
                />
              </div>
              <nav
                className="mt-3 flex flex-1 flex-col divide-y divide-gray-100 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="space-y-1 py-2 px-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6">
                  <div className="space-y-1 px-2">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://spenceradams.co/me.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      Spencer Adams
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="flex fixed w-full lg:hidden h-14 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
            <div className="w-14"></div>
            <img
              src="/images/logo-simple.svg"
              className="h-auto py-4 w-full flex-1"
              alt=""
            />
            <button
              type="button"
              className="border-r border-transparent px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomRightIcon className="h-7 w-7" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 pb-8 lg:pt-5 pt-20">
            {/* Page header */}
            <div className="bg-white">
              <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                <div className="">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5faae45cf877175a51267735/4409d131-04cd-4aa4-b5ae-c57ae8263c28/IMG03169.jpg?format=2500w"
                    alt=""
                    className="w-full h-48 rounded-lg shadow object-cover"
                  />
                </div>
                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-transparent">
                  <div className="min-w-0 flex-1">
                    {/* Profile */}

                    <div className="flex items-center">
                      <img
                        className="hidden h-16 w-16 rounded-full sm:block"
                        src="https://static1.squarespace.com/static/5faae45cf877175a51267735/t/63c0383faf64d77c00de1afa/1673541695809/watsons-square-logo.svg"
                        alt=""
                      />
                      <div>
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 rounded-full sm:hidden"
                            src="https://static1.squarespace.com/static/5faae45cf877175a51267735/t/63c0383faf64d77c00de1afa/1673541695809/watsons-square-logo.svg"
                            alt=""
                          />
                          <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                            Watson's Chicken
                          </h1>
                        </div>
                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                          <dt className="sr-only">Account status</dt>
                          <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                            <CheckCircleIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-logo-green-200"
                              aria-hidden="true"
                            />
                            Verified account
                          </dd>
                          <dt className="sr-only">Reviews</dt>
                          <dd className="mt-3 flex items-center text-sm font-medium text-gray-500 sm:mr-6 sm:mt-0">
                            <EyeIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            1.2k views/week
                          </dd>
                          {/* <dt className="sr-only">Followers</dt>
                          <dd className="mt-3 flex items-center text-sm font-medium text-gray-500 sm:mr-6 ">
                            <UsersIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            8.3k followers 
                          </dd>*/}
                          {/* <dt className="sr-only">Location</dt>
                          <dd className="mt-3 flex items-center text-sm font-medium text-gray-500 sm:mr-6 ">
                            <MapPinIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            Champaign, IL
                          </dd> */}
                          {/* <dt className="sr-only">Website</dt>
                          <dd className="mt-3 flex items-center text-sm font-medium text-gray-500 sm:mr-6 ">
                            <GlobeAltIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <a
                              href="https://watsonschicken.com"
                              className="text-cyan-500 hover:underline"
                            >
                              watsonschicken.com
                            </a>
                          </dd> */}
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                    <button
                      type="button"
                      onClick={() => setAlertActive(!alertActive)}
                      className={classNames(
                        alertActive
                          ? "bg-logo-green-300 text-white hover:bg-green-700 focus:ring-green-500"
                          : "bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:ring-cyan-500",
                        "inline-flex items-center rounded-md border border-gray-300  px-2 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                      )}
                    >
                      {alertActive ? (
                        <BellAlertIcon className="h-5 w-5" />
                      ) : (
                        <BellIcon className="h-5 w-5" />
                      )}
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    >
                      Message
                    </button>

                    <div className="flex-1 sm:hidden"></div>

                    <Menu
                      as="div"
                      className="relative inline-block text-left ml-auto"
                    >
                      <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-logo-green-400 focus:ring-offset-2">
                          <EllipsisHorizontalIcon
                            className="h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Account settings
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  Support
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                  )}
                                >
                                  License
                                </a>
                              )}
                            </Menu.Item>
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="submit"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block w-full px-4 py-2 text-left text-sm"
                                    )}
                                  >
                                    Sign out
                                  </button>
                                )}
                              </Menu.Item>
                            </form>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
            {/* Tabs */}
            <div>
              <div className="sm:hidden px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  defaultValue={tabs.find((tab) => tab.current).name}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
                <div className="border-b border-gray-100">
                  <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <a
                        key={tab.name}
                        href={tab.href}
                        className={classNames(
                          tab.current
                            ? "border-logo-green-500 text-logo-green-400"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                          "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                        )}
                        aria-current={tab.current ? "page" : undefined}
                      >
                        {tab.name}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Card */}
                  <div className="overflow-hidden bg-white border border-gray-200 shadow rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Intro
                      </h3>
                      <p className="mt-1 max-w-2xl text-sm text-gray-800">
                        We serve fried chicken tenders baskets and sandwiches.
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                      <dl className="sm:divide-y sm:divide-gray-200">
                        <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-1 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            <MapPinIcon className="h-5 w-5" />
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
                            Champaign, IL
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            <GlobeAltIcon className="h-5 w-5" />
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
                            <a
                              href="https://watsonschicken.com"
                              className="text-blue-400 hover:underline"
                            >
                              watsonschicken.com
                            </a>
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            <AtSymbolIcon className="h-5 w-5" />
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
                            <a
                              href="https://watsonschicken.com"
                              className="hover:underline"
                            >
                              mothershiphospitality@gmail.com
                            </a>
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            <StarIcon className="h-5 w-5" />
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
                            <div className="flex items-center">
                              <p className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
                                4.95
                              </p>
                              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                              <a
                                href="#"
                                className="text-sm text-gray-900 hover:underline "
                              >
                                73 reviews
                              </a>
                            </div>
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            <ClockIcon className="h-5 w-5" />
                          </dt>
                          <dd className="mt-1 hover:underline hover:cursor-pointer text-sm text-red-500 sm:col-span-5 sm:mt-0">
                            Closed now
                          </dd>
                        </div>
                        <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            <ClipboardIcon className="h-5 w-5" />
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
                            <div className="flex items-center">
                              <span className="text-logo-green-400 hover:underline hover:cursor-pointer">
                                Health Score
                              </span>
                              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                              Green
                            </div>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div className="h-36 overflow-hidden border border-gray-200 border-dashed bg-gray-50 flex items-center justify-center shadow sm:rounded-lg">
                    AD SPACE
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
