import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon, BellIcon } from "@heroicons/react/24/outline";
import { BellAlertIcon, CheckCircleIcon } from "@heroicons/react/20/solid";
import { Outlet, Link, NavLink, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/cloudflare";
import { json } from "@remix-run/cloudflare";
import Fuse from "fuse.js";
import { getDbFromContext } from "~/db/db.service.server";
import {
  trucks,
  menuSections,
  menuItems,
  scheduleItems,
  locations,
} from "~/db/schema";
import { and, asc, desc, eq, inArray, or, sql, lte, gte } from "drizzle-orm";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { TruckAlertModal } from "~/components/TruckAlertModal";
const tabs = [
  { name: "About", href: "", current: true },
  { name: "Schedule", href: "schedule", current: false },
  { name: "Menu", href: "menu", current: false },
  // { name: "Reviews", href: "reviews", current: false },
  // { name: "Photos", href: "photos", current: false },
  // { name: "Inspections", href: "inspections", current: false },
];

export const loader = async ({ context, params, request }: LoaderArgs) => {
  const db = getDbFromContext(context);

  const truckData = await db
    .select()
    .from(trucks)
    .where(sql`lower(${trucks.path}) like lower(${params.truck})`)
    .get();
  if (!truckData) {
    throw new Response("What a joke! Not found.", { status: 404 });
  }

  const unixTimestamp = Math.floor(Date.now() / 1000);
  const twoWeeksFromNowInSeconds = unixTimestamp + 1684208653;

  const currentShifts = await db
    .select()
    .from(scheduleItems)
    .where(
      and(
        eq(scheduleItems.truck_id, truckData.id),
        gte(scheduleItems.datetimeClose, unixTimestamp),
        lte(scheduleItems.datetimeOpen, unixTimestamp)
      )
    )
    .all();

  if (currentShifts.length > 0) {
    truckData.isOpen = true;
  } else {
    truckData.isOpen = false;
  }

  const schedule = await db
    .select({
      datetimeOpen: scheduleItems.datetimeOpen,
      datetimeClose: scheduleItems.datetimeClose,
      description: scheduleItems.description,
      dateString: scheduleItems.dateString,
      timeString: scheduleItems.timeString,
      name: locations.name,
      location: locations.location,
      lat: locations.lat,
      lon: locations.lon,
    })
    .from(scheduleItems)
    .where(
      and(
        eq(scheduleItems.truck_id, truckData.id),
        lte(scheduleItems.datetimeClose, twoWeeksFromNowInSeconds),
        gte(scheduleItems.datetimeClose, unixTimestamp)
      )
    )
    .orderBy(scheduleItems.datetimeOpen)
    .leftJoin(locations, eq(scheduleItems.location_id, locations.id))
    .all();

  console.log(unixTimestamp);

  const menuSectionsData = await db
    .select()
    .from(menuSections)
    .where(eq(menuSections.truck_id, truckData.id))
    .all();
  if (!menuSectionsData) {
    throw new Response("What a joke! Not found.", { status: 404 });
  }

  const menuSectionsIds = menuSectionsData.map((item) => item.id);

  const menuItemsData = await db
    .select()
    .from(menuItems)
    .where(inArray(menuItems.section_id, menuSectionsIds))
    .all();
  if (!menuItemsData) {
    throw new Response("What a joke! Not found.", { status: 404 });
  }

  // Group items by section_id
  const groupedItems = menuItemsData.reduce((acc, item) => {
    acc[item.section_id] = acc[item.section_id] || [];
    acc[item.section_id].push(item);
    return acc;
  }, {});

  // Combine sections and grouped items
  const menu = menuSectionsData.map((section) => {
    return {
      title: section.title,
      description: section.description,
      items: groupedItems[section.id].map(
        ({ id, name, description, price }) => ({
          id,
          name,
          description,
          price,
        })
      ),
    };
  });

  return json([truckData, menu, schedule]);
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Profile() {
  const [alertActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [truck, menu, schedule] = useLoaderData<typeof loader>();
  return (
    <>
      <div className="bg-white">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="">
            <img
              src={truck.banner}
              alt=""
              className="w-full h-32 sm:h-60 rounded-lg shadow object-cover"
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
              <div className="mt-1 h-10 flex items-center">
                <div className="flex items-center">
                  <dl className="flex flex-col sm:flex-row sm:flex-wrap">
                    {truck.verified !== 0 && (
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
                  </dl>
                </div>
              </div>
            </div>
            <div className="mt-2 flex space-x-3 md:mt-0 md:ml-4">
              <button
                type="button"
                onClick={() => setOpen(true)}
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
              <TruckAlertModal
                open={open}
                truckName={truck.name}
                setOpen={setOpen}
              />

              <div className="flex-1 sm:hidden"></div>

              {/* <Menu
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
              </Menu> */}
            </div>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div>
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <div className="border-b border-gray-200">
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

      <div className="relative isolate overflow-hidden mt-6 lg:overflow-visible">
        <div className="max-w-6xl sm:px-6 lg:px-8 grid grid-cols-1 mx-auto lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8 rounded-lg sm:shadow-md sm:border border-gray-200 lg:mx-auto lg:w-full lg:max-w-7xl ">
            <div className="">
              <Outlet />
            </div>
          </div>
          <div className="mt-8 lg:-mt-12 lg:-ml-4 lg:p-12 lg:col-span-4 lg:sticky lg:top-8 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="w-80 h-80 flex justify-center items-center text-gray-500 text-xl font-bold max-w-none mx-auto rounded-lg border shadow-md border-gray-200  bg-gray-50">
              YOUR AD HERE
            </div>
            <div className="w-80 mx-auto text-xs mt-2 text-logo-green-400 font-semibold">
              Promoted
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
