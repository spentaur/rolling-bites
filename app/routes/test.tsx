import { Fragment, useState } from "react";

import { useNavigate } from "@remix-run/react";

import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
  ClipboardIcon,
  GlobeAltIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  CheckCircleIcon,
  AtSymbolIcon,
  BellAlertIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";

import { useParams, Outlet, Link, NavLink } from "@remix-run/react";

const tabs = [
  { name: "About", href: "", current: true },
  { name: "Schedule", href: "schedule", current: false },
  { name: "Menu", href: "menu", current: false },
  { name: "Reviews", href: "reviews", current: false },
  { name: "Photos", href: "photos", current: false },
  { name: "Inspections", href: "inspections", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile() {
  const [alertActive, setAlertActive] = useState(false);
  const { username } = useParams();
  const navigate = useNavigate();

  const handleChange = (event) => {
    // get the selected value
    const value = event.target.value;
    // navigate to a new route based on the value
    navigate(`${value}`);
  };

  return (
    <>
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
                      {username}
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
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option value={tab.href} key={tab.name}>
                {tab.name}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="border-b border-gray-100">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.name}
                  to={tab.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? "border-logo-green-500 text-logo-green-400"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                      "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    )
                  }
                  end
                >
                  {tab.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
    </>
  );
}
