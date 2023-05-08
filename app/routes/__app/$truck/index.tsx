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
// import { isOpen } from "~/utils/search";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  const truck = useMatches().find((m) => m.id === "routes/__app/$truck")?.data;
  // const isTruckOpen = isOpen(truck.schedule);

  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Intro</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-800">
          {truck.description}
        </p>
      </div>
      <div className="pb-5">
        <dl className="">
          {truck.location && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <MapPinIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">{truck.location}</dd>
            </div>
          )}

          {/* <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
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
          </div> */}

          {truck.website && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <GlobeAltIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm">
                <a
                  href={`https://${truck.website}`}
                  className="text-blue-400 hover:underline"
                >
                  {truck.website}
                </a>
              </dd>
            </div>
          )}

          {truck.instagram && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <InstagramIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a
                  href={`https://instagram.com/${truck.instagram}`}
                  className="hover:underline"
                >
                  @{truck.instagram}
                </a>
              </dd>
            </div>
          )}

          {truck.facebookName && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <FacebookIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a href={truck.facebookPath} className="hover:underline">
                  {truck.facebookName}
                </a>
              </dd>
            </div>
          )}

          {truck.email && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <AtSymbolIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a href={`mailto:${truck.email}`} className="hover:underline">
                  {truck.email}
                </a>
              </dd>
            </div>
          )}
          {truck.phone && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <PhoneIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">{truck.phone}</dd>
            </div>
          )}

          {/* {truck.schedule && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <ClockIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <Link to="schedule" className="text-red-500 hover:underline">
                  {truck.schedule}
                </Link>
              </dd>
            </div>
          )} */}
          {/* {truck.delivery && (
            <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <ShoppingBagIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <div className="flex items-center">
                  {truck.delivery.map(
                    (app: { name: string; url: string }, index) => (
                      <>
                        <a
                          href={app.url}
                          className="text-blue-400 hover:underline"
                        >
                          {app.name}
                        </a>
                        {truck.delivery.length - 1 !== index && (
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
          )} */}

          <div className="flex items-center space-x-3 py-3 px-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <TruckIcon className="h-5 w-5" />
            </dt>
            <dd className="text-sm text-gray-900">
              {truck.privateEvents ? "A" : "Not a"}
              vailable for private events
            </dd>
          </div>

          {/* {truck.inspection && (
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
                  {truck.inspection}
                </div>
              </dd>
            </div>
          )} */}
        </dl>
      </div>
    </>
  );
}
