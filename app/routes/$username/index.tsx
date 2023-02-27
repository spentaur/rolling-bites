import {
  ClockIcon,
  ClipboardIcon,
  GlobeAltIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function About() {
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Intro
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-800">
          We serve fried chicken tenders baskets and sandwiches.
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-1 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <MapPinIcon className="h-5 w-5" />
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
              Champaign, IL
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <GlobeAltIcon className="h-5 w-5" />
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
              <a
                href="https://watsonschicken.com"
                className="text-blue-400 hover:underline"
              >
                watsonschicken.com
              </a>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
              <a
                href="https://instagram.com/watsonschicken"
                className="hover:underline"
              >
                @watsonschicken
              </a>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-5 h-5 text-gray-500"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
              <a
                href="https://facebook.com/watsonschicken"
                className="hover:underline"
              >
                Watson's Shack & Rail
              </a>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <AtSymbolIcon className="h-5 w-5" />
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
              <a
                href="https://watsonschicken.com"
                className="hover:underline"
              >
                mothershiphospitality@gmail.com
              </a>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <StarIcon className="h-5 w-5" />
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
              <div className="flex items-center">
                <p className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
                  4.95
                </p>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                <a
                  href="#"
                  className="text-sm text-gray-900 hover:underline "
                >
                  73 reviews
                </a>
              </div>
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <ClockIcon className="h-5 w-5" />
            </dt>
            <dd className="mt-1 hover:underline hover:cursor-pointer text-sm text-red-500 sm:col-span-5 sm:mt-0">
              Closed now
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              <ClipboardIcon className="h-5 w-5" />
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-5 sm:mt-0">
              <div className="flex items-center">
                <span className="text-logo-green-400 hover:underline hover:cursor-pointer">
                  Health Score
                </span>
                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                Green
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
