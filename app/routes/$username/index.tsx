import {
  ClockIcon,
  ClipboardIcon,
  GlobeAltIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { AtSymbolIcon, MapPinIcon } from "@heroicons/react/20/solid";
import InstagramIcon from "~/components/InstagramIcon";
import FacebookIcon from "~/components/FacebookIcon";
import { Link } from "@remix-run/react";

const info = {
  location: "Champaign, IL",
  website: "watsonschicken.com",
  instagram: "watsonschicken",
  facebook: {
    name: "Watson's Shack & Rail",
    url: "watsonschicken",
  },
  email: "mothershiphospitality@gmail.com",
  schedule: "Closed Now",
  // inspection: "Green",
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Intro</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-800">
          We serve fried chicken tenders baskets and sandwiches.
        </p>
      </div>
      <div className="sm:border-t border-gray-200 px-4 sm:px-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          {info.location && (
            <div className="flex items-center space-x-3 py-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <MapPinIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">{info.location}</dd>
            </div>
          )}

          {info.website && (
            <div className="flex items-center space-x-3 py-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <GlobeAltIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm">
                <a
                  href={info.website}
                  className="text-blue-400 hover:underline"
                >
                  {info.website}
                </a>
              </dd>
            </div>
          )}

          {info.instagram && (
            <div className="flex items-center space-x-3 py-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <InstagramIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a
                  href={`https://instagram.com/${info.instagram}`}
                  className="hover:underline"
                >
                  @{info.instagram}
                </a>
              </dd>
            </div>
          )}

          {info.facebook && (
            <div className="flex items-center space-x-3 py-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <FacebookIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a
                  href={`https://facebook.com/${info.facebook.url}`}
                  className="hover:underline"
                >
                  {info.facebook.name}
                </a>
              </dd>
            </div>
          )}

          {info.email && (
            <div className="flex items-center space-x-3 py-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <AtSymbolIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <a href={`mailto:${info.email}`} className="hover:underline">
                  {info.email}
                </a>
              </dd>
            </div>
          )}

          {info.schedule && (
            <div className="flex items-center space-x-3 py-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                <ClockIcon className="h-5 w-5" />
              </dt>
              <dd className="text-sm text-gray-900">
                <Link to="schedule" className="text-red-500 hover:underline">
                  {info.schedule}
                </Link>
              </dd>
            </div>
          )}

          {info.inspection && (
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
                  {info.inspection}
                </div>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </>
  );
}
