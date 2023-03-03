import {
  ClockIcon,
  ClipboardIcon,
  GlobeAltIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { AtSymbolIcon } from "@heroicons/react/20/solid";

const menu = [
  {
    title: "Tenders",
    items: [
      {
        id: 1,
        name: "4 Tenders and 1 Sauce",
        description:
          "Pickle brinded white meat tenders fried to a crispy perfection. Each tender basket comes with waffle fries and 1 sauce.",
        price: "$10.00",
      },
      {
        id: 2,
        name: "6 Tenders and 2 Sauces",
        description:
          "Pickle brinded white meat tenders fried to a crispy perfection. Each tender basket comes with waffle fries and 1 sauce.",
        price: "$15.00",
      },
    ],
  },
  {
    title: "Sandwiches",
    items: [
      {
        id: 3,
        name: "Watson's Hot",
        description:
          "Crunchy chicken tenders dipped in Watson's Hot, served on a brioche bun with creamy coleslaw, dill pickles, & comeback sauce.",
        price: "$14.00",
      },
      {
        id: 4,
        name: "Buffalo Starchild",
        description:
          "Crunchy chicken tenders tossed in buffal sauce, served on a brioche bun with sorghum glazed bacon, black pepper ranch, blue cheese crumbles, & mixed greens.",
        price: "$14.00",
      },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Menu() {
  return (
    <>
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Menu</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-800">
          Menu prices and availability subject to change and this website may
          not reflect exactly what is available on any given day.
        </p>
      </div>
      <div className="w-full px-4 py-5 sm:p-0">
        {menu.map((section) => (
          <>
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white text-sm uppercase px-2 font-medium text-gray-900">
                  {section.title}
                </span>
              </div>
            </div>
            <dl className="">
              {section.items.map((item) => (
                <div key={item.id} className="py-4 sm:py-5 sm:px-6">
                  <dt className="text-sm font-medium">{item.name}</dt>
                  <dd className="text-sm text-gray-900 mt-1">{item.price}</dd>
                  <dd className="text-sm text-gray-500 mt-1">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        ))}
      </div>
    </>
  );
}
