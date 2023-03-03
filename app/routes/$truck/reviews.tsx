import { Fragment } from "react";
import { CalendarIcon, MapPinIcon, StarIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const reviews = [
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 2,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  // More messages...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Reviews</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-800">
          Businesses can't pay to alter or remove their reviews. Reviews are
          automatically processed to detect inappropriate content like fake
          reviews and spam. We may take down reviews that are flagged in order
          to comply with Rolling Bites policies or legal obligations.
        </p>
        <p className="text-sm font-medium mt-2">Sort by</p>
        <div className="mt-2 space-x-1 space-y-1">
          <button className="text-xs bg-logo-green-300 font-medium border border-transparent px-3 py-1.5 rounded-full text-white">
            Most helpful
          </button>
          <button className="text-xs font-medium border border-gray-300 px-3 py-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-50">
            Newest
          </button>
          <button className="text-xs font-medium border border-gray-300 px-3 py-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-50">
            Highest
          </button>
          <button className="text-xs font-medium border border-gray-300 px-3 py-1.5 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-50">
            Lowest
          </button>
        </div>
      </div>
      <div className="sm:border-t border-gray-200 sm:px-4 py-5 sm:p-0">
        <ul className="sm:divide-y divide-gray-200">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="py-5 px-4 sm:px-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
            >
              <div className="flex justify-between space-x-3">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {review.sender}
                  </p>

                  <div className="flex items-center py-1">
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-yellow-400" />
                    <StarIcon className="w-5 h-5 text-gray-300" />
                  </div>
                </div>
                <time
                  dateTime={review.datetime}
                  className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                >
                  {review.time}
                </time>
              </div>
              <div className="mt-1">
                <p className="text-sm text-gray-600 line-clamp-4">
                  {review.preview}
                </p>
              </div>
              <div className="mt-1">
                <a
                  href="#"
                  class="block text-sm font-medium text-blue-600 hover:underline"
                >
                  Read more
                </a>
              </div>
              <aside className="mt-3">
                <p class="mt-1 text-xs text-gray-500">
                  19 people found this helpful
                </p>
                <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200">
                  <a
                    href="#"
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5"
                  >
                    Helpful
                  </a>
                  <a
                    href="#"
                    class="pl-4 text-sm font-medium text-blue-600 hover:underline"
                  >
                    Report
                  </a>
                </div>
              </aside>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
