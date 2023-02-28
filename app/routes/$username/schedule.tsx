import { Fragment } from "react";
import { CalendarIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const meetings = [
  {
    id: 1,
    date: "February 27th, 2023",
    time: "11:00AM-3:00PM",
    datetime: "2023-02-27T11:00",
    name: "Wright & Green",
    location: "Wright & Green, Champaign, IL",
  },
  {
    id: 2,
    date: "February 28th, 2023",
    time: "11:00AM-3:00PM",
    datetime: "2023-02-28T11:00",
    name: "Wright & Green",
    location: "Wright & Green, Champaign, IL",
  },
  {
    id: 3,
    date: "March 1st, 2023",
    time: "11:00AM-3:00PM",
    datetime: "2023-03-01T11:00",
    name: "Wright & Green",
    location: "Wright & Green, Champaign, IL",
  },
  {
    id: 4,
    date: "March 1st, 2023",
    time: "5:00PM-8:00PM",
    datetime: "2023-03-01T17:00",
    name: "Triptych (WINGS!)",
    location: "1703 Woodfield Dr, Savoy, IL",
    info: `Wing Wednesday at Triptych Brewing from 5-8pm! 
    This week, the featured sauce is a Citrus BBQ sauce made with This Is Fine Double IPA.Want more heat? Make it extra hot for a dollar more!`,
  },
  {
    id: 5,
    date: "March 2nd, 2023",
    time: "4:00PM-8:00PM",
    datetime: "2023-03-02T16:00",
    name: "Riggs Beer Release",
    location: "1901 S High Cross Rd, Urbana, IL",
  },
  {
    id: 6,
    date: "March 3rd, 2023",
    time: "11:00AM-3:00PM",
    datetime: "2023-03-03T11:00",
    name: "Wright & Green",
    location: "Wright & Green, Champaign, IL",
  },
  // More meetings...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="px-4 py-5 sm:px-6">
      <h2 className="text-base font-semibold leading-6 text-gray-900">
        Current Schedule
      </h2>
      <div className="w-full">
        <ol className="mt-4 divide-y divide-gray-100 text-sm leading-6">
          {meetings.map((meeting) => (
            <li key={meeting.id} className="relative flex space-x-6 py-6">
              <div className="flex-auto">
                <h3 className="pr-10 font-semibold text-gray-900 ">
                  {meeting.name}
                </h3>
                <dl className="mt-2 flex flex-col text-gray-500">
                  <div className="flex items-start space-x-3">
                    <dt className="mt-0.5">
                      <span className="sr-only">Date</span>
                      <CalendarIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd>
                      <time dateTime={meeting.datetime}>
                        {meeting.date} <br /> {meeting.time}
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
                      <a href="#" className="underline hover:no-underline">
                        {meeting.location}
                      </a>
                    </dd>
                  </div>
                  {meeting.info && (
                    <div className="mt-2 flex items-start space-x-3">
                      <dt className="mt-0.5">
                        <span className="sr-only">Information</span>
                        <InformationCircleIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd>{meeting.info}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
