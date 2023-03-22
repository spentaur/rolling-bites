import {
  ClockIcon,
  GlobeAltIcon,
  TruckIcon,
  ShoppingBagIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/20/solid";
import InstagramIcon from "~/components/InstagramIcon";
import FacebookIcon from "~/components/FacebookIcon";
import { Link, useMatches } from "@remix-run/react";
import { isOpen } from "~/utils/search";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  const truck = useMatches().find((m) => m.id === "routes/$truck")?.data;
  const isTruckOpen = isOpen(truck.schedule);
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Intro</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-800">
          {truck.about.description}
        </p>
      </div>
      <div className="pb-5">
        <dl className="">
          {truck.about.location && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <MapPinIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">{truck.about.location}</dd>
            </div>
          )}

          <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <ClockIcon className="h-5 w-5" />
            </dt>
            <dd className="mt-1 sm:col-span-5 sm:mt-0">
              <Link
                to="schedule"
                preventScrollReset={true}
                className={classNames(
                  isTruckOpen ? "text-logo-green-500" : "text-red-500",
                  "hover:underline hover:cursor-pointer text-sm"
                )}
              >
                {isTruckOpen ? <>Open</> : <>Closed</>} now
              </Link>
            </dd>
          </div>

          {truck.about.website && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <GlobeAltIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm">
                <a
                  href={`https://${truck.about.website}`}
                  className="text-blue-400 hover:underline"
                >
                  {truck.about.website}
                </a>
              </dd>
            </div>
          )}

          {truck.about.instagram && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <InstagramIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a
                  href={`https://instagram.com/${truck.about.instagram}`}
                  className="hover:underline"
                >
                  @{truck.about.instagram}
                </a>
              </dd>
            </div>
          )}

          {truck.about.facebook && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <FacebookIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a href={truck.about.facebook.url} className="hover:underline">
                  {truck.about.facebook.name}
                </a>
              </dd>
            </div>
          )}

          {truck.about.email && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <AtSymbolIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a
                  href={`mailto:${truck.about.email}`}
                  className="hover:underline"
                >
                  {truck.about.email}
                </a>
              </dd>
            </div>
          )}
          {truck.about.phone && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <PhoneIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">{truck.about.phone}</dd>
            </div>
          )}

          {truck.about.schedule && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <ClockIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <Link to="schedule" className="text-red-500 hover:underline">
                  {truck.about.schedule}
                </Link>
              </dd>
            </div>
          )}
          {truck.about.delivery && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <ShoppingBagIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <div className="flex items-center">
                  {truck.about.delivery.map(
                    (app: { name: string; url: string }, index) => (
                      <>
                        <a
                          href={app.url}
                          className="text-blue-400 hover:underline"
                        >
                          {app.name}
                        </a>
                        {truck.about.delivery.length - 1 !== index && (
                          <>
                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>{" "}
                          </>
                        )}
                      </>
                    )
                  )}
                </div>
              </dd>
            </div>
          )}

          <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <TruckIcon className="h-5 w-5" />
            </dt>
            <dd className="text-sm text-gray-900">
              {truck.about.privateEvents ? "A" : "Not a"}
              vailable for private events
            </dd>
          </div>

          {/* {truck.about.inspection && (
            <div className="flex items-center space-x-3 py-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <ClipboardIcon className="h-5 w-5" />
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
                <div className="flex items-center">
                  <span className="text-logo-green-400 hover:underline hover:cursor-pointer">
                    Health Score
                  </span>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  {truck.about.inspection}
                </div>
              </dd>
            </div>
          )} */}
        </dl>
      </div>
    </>
  );
}
