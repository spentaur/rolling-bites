import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useSearchParams,
} from "@remix-run/react";

import styles from "./styles/app.css";

import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { useState } from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  "theme-color": "#5ea45e",
  "apple-mobile-web-app-capable": "yes",
  "mobile-web-app-capable": "yes",
});

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
  ];
}

export default function App() {
  const [searchParams] = useSearchParams();
  const [open, setOpen] = useState(true);

  return (
    <html className="h-full" lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <Navbar context={[open, setOpen]} />
        {searchParams.get("search") && <Search context={[open, setOpen]} />}

        <div className="flex flex-1 flex-col lg:pl-64">
          <main className="flex-1 pb-8 lg:pt-5 pt-20">
            <Outlet />
          </main>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
