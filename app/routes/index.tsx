import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  return (
    <>
      <div className="h-full bg-gradient-to-t from-gray-100 to-logo-green-300">
        <div className="flex px-6 pt-4 mx-auto">
          <div className="basis-1/3 flex h-20 items-center">
            {/* Search */}
            <button
              type="button"
              className="inline-flex transition-[padding] ease-in-out duration-500 cursor-text hover:pr-24 items-center rounded-full border border-transparent bg-white pl-4 pr-4 py-2 text-sm font-medium text-logo-green-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <MagnifyingGlassIcon
                className="-ml-1 mr-2 h-5 w-5 "
                aria-hidden="true"
              />
              Search
            </button>
          </div>
          <div className="basis-1/3 h-20 flex justify-center">
            <img
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 h-20"
              src="/images/logo-simple.svg"
              alt="logo"
            />
          </div>
          <div className="basis-1/3 flex h-20 items-center justify-end"></div>
        </div>
      </div>
      <div className="h-96">
        <h1 className="text-4xl font-bold font-cuprum text-logo-green-500">
          test
        </h1>
      </div>
    </>
  );
}
