import { CheckIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Hobby",
    href: "#",
    priceMonthly: 12,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc.",
      "Orci neque eget pellentesque.",
    ],
  },
  {
    name: "Freelancer",
    href: "#",
    priceMonthly: 24,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
    ],
  },
  {
    name: "Startup",
    href: "#",
    priceMonthly: 32,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
    ],
  },
  {
    name: "Enterprise",
    href: "#",
    priceMonthly: 48,
    description: "All the basics for starting a new business",
    includedFeatures: [
      "Potenti felis, in cras at at ligula nunc. ",
      "Orci neque eget pellentesque.",
      "Donec mauris sit in eu tincidunt etiam.",
      "Faucibus volutpat magna.",
      "Id sed tellus in varius quisque.",
      "Risus egestas faucibus.",
      "Risus cursus ullamcorper.",
    ],
  },
];

export default function Index() {
  return (
    <div className="wrapper">
      <nav className="fixed pb-safe bottom-0 z-30 p-2 flex h-20 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100">
        <img src="/images/logo-simple.svg" alt="" className="h-16" />
      </nav>
      <div className="">
        <div className="bg-gradient-to-b from-logo-green-300 via-logo-green-100 to-gray-100">
          <div className="h-screen">
            {/* <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                  aria-hidden="true"
                >
                  <circle
                    cx={512}
                    cy={512}
                    r={512}
                    fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                    fillOpacity="0.7"
                  />
                  <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                      <stop stopColor="#7775D6" />
                      <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Boost your productivity.
                    <br />
                    Start using our app today.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Ac euismod vel sit maecenas id pellentesque eu sed
                    consectetur. Malesuada adipiscing sagittis vel nulla.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a
                      href="#"
                      className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="text-base font-semibold leading-7 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="relative mt-16 h-80 lg:mt-8">
                  <img
                    className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt="App screenshot"
                    width={1824}
                    height={1080}
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="mx-auto max-w-7xl py-24 px-6 lg:px-8">
          <div className="sm:align-center sm:flex sm:flex-col">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">
              Pricing Plans
            </h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
            <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
              <button
                type="button"
                className="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
              >
                Monthly billing
              </button>
              <button
                type="button"
                className="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
              >
                Yearly billing
              </button>
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-gray-900">
                    {tier.name}
                  </h2>
                  <p className="mt-4 text-sm text-gray-500">
                    {tier.description}
                  </p>
                  <p className="mt-8">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      ${tier.priceMonthly}
                    </span>{" "}
                    <span className="text-base font-medium text-gray-500">
                      /mo
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    className="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900"
                  >
                    Buy {tier.name}
                  </a>
                </div>
                <div className="px-6 pt-6 pb-8">
                  <h3 className="text-sm font-medium text-gray-900">
                    What's included
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {tier.includedFeatures.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
