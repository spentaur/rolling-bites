// create and empty Sidebar component
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3BottomRightIcon,
  BellIcon,
  CogIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link, NavLink } from "@remix-run/react";

const navigation = [
  // { name: "Home", href: "/", icon: HomeIcon, current: true },
  {
    name: "Search",
    href: "/search",
    icon: MagnifyingGlassIcon,
    current: false,
  },
  // {
  //   name: "Notifications",
  //   href: "/notifications",
  //   icon: BellIcon,
  //   current: false,
  // },
];
const secondaryNavigation = [
  // { name: "Settings", href: "/settings", icon: CogIcon },
  { name: "Help", href: "/help", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "/privacy", icon: ShieldCheckIcon },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
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
                          <Link to="/">
                            <img
                              className="h-8 w-auto"
                              src="/images/logo-simple.svg"
                              alt="Rolling Bites"
                            />
                          </Link>
                        </div>
                        <nav
                          className="mt-3 flex flex-1 flex-col overflow-y-auto"
                          aria-label="Sidebar"
                        >
                          <div className="space-y-1 py-2 px-2">
                            {navigation.map((item) => (
                              <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? "bg-gray-100 text-gray-900"
                                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                                  )
                                }
                              >
                                {({ isActive }) => (
                                  <>
                                    <item.icon
                                      className={classNames(
                                        isActive
                                          ? "text-gray-500"
                                          : "text-gray-400 group-hover:text-gray-500",
                                        "mr-3 flex-shrink-0 h-6 w-6"
                                      )}
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </>
                                )}
                              </NavLink>
                            ))}
                          </div>
                          <div className="mt-6 pt-6">
                            <div className="space-y-1 px-2">
                              {secondaryNavigation.map((item) => (
                                <NavLink
                                  key={item.name}
                                  href={item.href}
                                  className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                >
                                  <item.icon
                                    className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </nav>
                      </div>
                      {/* <div className="flex flex-shrink-0 p-4">
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
                      </div> */}
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
              <Link to="/">
                <img
                  className="h-8 w-auto"
                  src="/images/logo-simple.svg"
                  alt="Rolling Bites"
                />
              </Link>
            </div>
            <nav
              className="mt-3 flex flex-1 divide-y divide-gray-100 flex-col overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="space-y-1 py-2 px-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <item.icon
                          className={classNames(
                            isActive
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "mr-3 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
              <div className="space-y-1 py-2 px-2">
                {secondaryNavigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </nav>
          </div>
          {/* <div className="flex flex-shrink-0 p-4">
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
          </div> */}
        </div>
      </div>

      <div className="flex fixed z-10 w-full lg:hidden h-14 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
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
    </>
  );
};
