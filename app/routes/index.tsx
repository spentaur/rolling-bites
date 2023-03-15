import { CheckIcon } from "@heroicons/react/20/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="bg-white">
        <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
          <h2 className="font-medium">TODO</h2>
          <ul className="mt-3 space-y-3">
            <li className="flex items-center">
              <div className="flex flex-shrink-0">
                <span className="h-6 w-6 mr-3 flex items-center justify-center bg-green-500 rounded-full">
                  <CheckIcon className="h-4 w-4 text-white" />
                </span>
                Change the things
              </div>
            </li>
            <li className="flex items-center">
              <div className="flex flex-shrink-0">
                <span className="h-6 w-6 mr-3 flex items-center justify-center border border-gray-500 bg-transparent rounded-full">
                  <div className="h-4 w-4" />
                </span>
                Change the things
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
