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

export default function Schedule() {
  const truck = useMatches().find((m) => m.id === "routes/$truck")?.data;

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
      <div className="px-4 pb-5 sm:px-6 w-full sm:hidden">
        <img
          src="/images/ad-long-3.jpeg"
          className="md:border border-gray-200 md:shadow-md rounded-lg"
          alt="ad"
        />
        <div className="w-80 mx-auto text-xs mt-2 text-logo-green-400 font-semibold">
          Promoted
        </div>
      </div>
      <div className="pb-5 px-4 sm:px-0">
        <ol className=" text-sm">
          {truck.schedule
            .filter(
              (event: { datetime: string }) =>
                new Date(event.datetime).setHours(0, 0, 0, 0) >=
                new Date().setHours(0, 0, 0, 0)
            )
            .map(
              (event: {
                id: Key | null | undefined;
                name: number;
                datetime: string;
                date: string;
                time: string;
                location: string;
                info: string | null | undefined;
              }) => (
                <li
                  key={event.id}
                  className="relative sm:px-6 flex space-x-6 py-3"
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
                          <time dateTime={event.datetime}>
                            {event.date} <br /> {event.time}
                          </time>
                        </dd>
                      </div>
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
                      {event.info && (
                        <div className="mt-2 flex items-start space-x-3">
                          <dt className="mt-0.5">
                            <span className="sr-only">Information</span>
                            <InformationCircleIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </dt>
                          <dd>{event.info}</dd>
                        </div>
                      )}
                    </dl>
                  </div>
                </li>
              )
            )}
        </ol>
      </div>
    </>
  );
}
