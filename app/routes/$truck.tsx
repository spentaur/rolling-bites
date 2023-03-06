import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Outlet, Link, NavLink, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import Fuse from "fuse.js";
const tabs = [
  { name: "About", href: "", current: true },
  { name: "Schedule", href: "schedule", current: false },
  { name: "Menu", href: "menu", current: false },
  // { name: "Reviews", href: "reviews", current: false },
  // { name: "Photos", href: "photos", current: false },
  // { name: "Inspections", href: "inspections", current: false },
];

export const loader = async ({ params, request }: LoaderArgs) => {
  const data = require("../data/trucks.json");
  const options = {
    keys: ["path"],
    useExtendedSearch: true,
  };
  const fuse = new Fuse(data, options);
  const truck = fuse.search(`=/${params.truck}`);
  if (!truck.length) {
    throw new Response("What a joke! Not found.", { status: 404 });
  }
  return json(truck[0].item);
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile() {
  // const [alertActive, setAlertActive] = useState(false);
  const truck = useLoaderData<typeof loader>();
  return (
    <>
      <div className="bg-white">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="">
            <img
              src={truck.banner}
              alt=""
              className="w-full h-48 rounded-lg shadow object-cover"
            />
          </div>
          <div className="pt-6 md:flex md:items-center md:justify-between lg:border-t lg:border-transparent">
            <div className="min-w-0 flex-1">
              {/* Profile */}

              <div className="flex items-center">
                <img
                  className="h-16 w-16 object-contain rounded-full"
                  src={truck.avatar}
                  alt=""
                />
                <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                  {truck.name}
                </h1>
              </div>
              <div className="mt-1 flex items-center">
                <div className="flex items-center">
                  <dl className="flex flex-col sm:flex-row sm:flex-wrap">
                    {truck.verified && (
                      <>
                        <dt className="sr-only">Account status</dt>
                        <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                          <CheckCircleIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-logo-green-200"
                            aria-hidden="true"
                          />
                          Verified profile
                        </dd>
                      </>
                    )}

                    {/* <dt className="sr-only">Views</dt>
                    <dd className="mt-3 flex items-center text-sm font-medium text-gray-500 sm:mr-6 sm:mt-0">
                      <EyeIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      1.2k views/week
                    </dd> */}
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
                            <Link
                              to="report"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Report an issue
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            {/*<div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
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
              </button> */}
            {/* <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Message
              </button> 

              <div className="flex-1 sm:hidden"></div>
            </div>
            */}
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div>
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="border-b border-gray-100">
            <nav
              className="-mb-px flex space-x-8 overflow-x-scroll scrollbar-hide"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <NavLink
                  preventScrollReset={true}
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

      <div className="mt-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-screen flex-col">
            {/* 3 column wrapper */}
            <div className="mx-auto w-full max-w-7xl flex-grow lg:flex">
              {/* main wrapper */}
              <div className="min-w-0 flex-1 bg-white xl:flex">
                <div className="bg-white lg:min-w-0 lg:flex-1">
                  <div className="h-full">
                    {/* Start main area*/}
                    <div className="h-full">
                      <div className="rounded-lg shadow-md border border-gray-200">
                        <Outlet />
                      </div>
                    </div>
                    {/* End main area */}
                  </div>
                </div>
              </div>

              <div className="lg:flex-shrink-0">
                <div className="h-full mt-8 lg:mt-0 lg:pl-6 lg:w-80">
                  {/* Start right column area */}
                  <div
                    className="relative h-full"
                    style={{ minHeight: "16rem" }}
                  >
                    <div className="absolute inset-0 bg-gray-50 sm:rounded-lg sm:border-2 border-dashed border-gray-200">
                      AD SPACE
                    </div>
                  </div>
                  {/* End right column area */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
