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
      {/* Card */}
      <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="overflow-hidden bg-white border border-gray-200 shadow rounded-lg">
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
        </div>
        <div className="h-36 overflow-hidden border border-gray-200 border-dashed bg-gray-50 flex items-center justify-center shadow sm:rounded-lg">
          AD SPACE
        </div>
      </div>
    </>
  );
}
