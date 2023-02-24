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

export default function Menu() {
  return (
    <>
      {/* Card */}
      <div className="mt-2 grid grid-cols-1 gap-5 h-96 p-96">
        <div className="overflow-hidden bg-white border border-gray-200 shadow rounded-lg">
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">Menu</div>
        </div>
      </div>
    </>
  );
}
