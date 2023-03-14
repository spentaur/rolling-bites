import { Fragment, useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "@remix-run/react";
import { Search } from "./Search";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <Search open={open} setOpen={setOpen} />
      <div className="sticky shadow-sm top-0 z-10 w-full backdrop-blur-sm border-b lg:border-slate-900/10 bg-white/90">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between lg:grid lg:grid-cols-12">
            <div className="flex items-center lg:col-span-3">
              <Link to="/">
                <img
                  className="block h-7 lg:h-8 w-auto"
                  src="/images/logo-simple.svg"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden lg:flex justify-center px-6 py-4 min-w-0 flex-1 lg:px-0 lg:col-span-6">
              <button
                onClick={() => setOpen(true)}
                type="button"
                className="max-w-xs w-full flex items-center text-sm leading-6 text-slate-400 sm:rounded-md sm:ring-1 ring-slate-900/20 shadow-sm sm:py-1.5 pl-2 pr-3 py-3 hover:ring-slate-400"
              >
                <span className="sr-only">Open search</span>
                <MagnifyingGlassIcon className="h-5 w-5 mr-3 flex-none" />
                Quick search...
              </button>
            </div>
            <div className="flex py-2 items-center lg:hidden">
              <button
                onClick={() => setOpen(true)}
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open search</span>
                <MagnifyingGlassIcon
                  className="block h-6 w-6"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
