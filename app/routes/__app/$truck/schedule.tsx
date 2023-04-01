import type {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { Fragment } from "react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useMatches } from "@remix-run/react";
import { isCurrentShift } from "~/utils/search";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Schedule() {
  const truck = useMatches().find((m) => m.id === "routes/__app/$truck")?.data;
  const filteredSchedule = truck.schedule.filter(
    (event: { datetimeClose: string }) =>
      new Date(event.datetimeClose) >= new Date()
  );
  console.log(filteredSchedule);
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Current Schedule
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-800">
          Schedule subject to change.
        </p>
      </div>
      {/* <div className="px-4 pb-5 sm:px-6 w-full sm:hidden">
        <img
          src="/images/ad-long-3.jpeg"
          className="border border-gray-200 shadow-md rounded-lg"
          alt="ad"
        />
        <div className="mx-auto text-xs mt-2 text-logo-green-400 font-semibold">
          Promoted
        </div>
      </div> */}

      <div className="pb-5 px-4 sm:px-0">
        <ol className=" text-sm">
          {filteredSchedule.length > 0 ? (
            filteredSchedule.map(
              (event: {
                id: Key | null | undefined;
                name: number;
                datetimeOpen: string;
                datetimeClose: string;
                date: string;
                time: string;
                location: string;
                description: string | null | undefined;
              }) => (
                <li
                  key={event.id}
                  className={classNames(
                    isCurrentShift(event) ? "bg-logo-green-100/20" : "",
                    "relative sm:px-6 flex space-x-6 py-3"
                  )}
                >
                  <div className="flex-auto">
                    <h3 className="pr-10 font-semibold text-gray-900 ">
                      {event.name}
                    </h3>
                    <dl className="mt-2 mx-2 flex flex-col text-gray-500">
                      <div className="flex items-start space-x-3">
                        <dt className="mt-0.5">
                          <span className="sr-only">Date</span>
                          <CalendarIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd>
                          <time dateTime={event.datetimeOpen}>
                            {event.date} <br /> {event.time}
                          </time>
                        </dd>
                      </div>
                      {event.location && (
                        <div className="mt-2 flex items-start space-x-3">
                          <dt className="mt-0.5">
                            <span className="sr-only">Location</span>
                            <MapPinIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </dt>

                          <dd>
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                event.location
                              )}`}
                              className="underline hover:no-underline"
                            >
                              {event.location}
                            </a>
                          </dd>
                        </div>
                      )}
                      {event.description && (
                        <div className="mt-2 flex items-start space-x-3">
                          <dt className="mt-0.5">
                            <span className="sr-only">Information</span>
                            <InformationCircleIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </dt>
                          <dd>{event.description}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </li>
              )
            )
          ) : (
            <li className="relative sm:px-6 flex space-x-6 py-3">
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-gray-900 ">
                  There are not events currently scheduled
                </h3>
              </div>
            </li>
          )}
        </ol>
      </div>
    </>
  );
}
