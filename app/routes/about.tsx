import {
  CloudArrowUpIcon,
  EnvelopeIcon,
  LockClosedIcon,
  MapPinIcon,
  ServerIcon,
  TruckIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/about-truck.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none xl:w-1/2">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Rollingbites is a place that helps you discover and enjoy food
              trucks near you. Whether you're looking for a quick bite, a
              catering service, or a new culinary adventure, Rollingbites has
              you covered.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p>
                Rollingbites was founded in 2023 by Spencer Adams while working
                on a food truck in Champaign, IL. Spencer noticed a gap in the
                market for a platform that connects food truck lovers with food
                truck vendors. He decided to create Rollingbites to make it
                easier for people to find and enjoy food trucks across the
                country.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <MapPinIcon
                    className="mt-1 h-5 w-5 flex-none text-logo-green-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Find nearby trucks
                    </strong>{" "}
                    Find food trucks based on your location, cuisine, rating,
                    and more
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <EnvelopeIcon
                    className="mt-1 h-5 w-5 flex-none text-logo-green-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Get notified
                    </strong>{" "}
                    Receive email notifications when your favorite trucks update
                    their schedules
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <TruckIcon
                    className="mt-1 h-5 w-5 flex-none text-logo-green-400"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Book trucks
                    </strong>{" "}
                    Book food trucks for your next event with ease
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Rollingbites is more than just an app. It’s a community of food
                truck enthusiasts who share a passion for delicious and diverse
                food. Join us today and start rolling with Rollingbites!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
