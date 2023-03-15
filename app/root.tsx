import type { MetaFunction } from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

import { Navbar } from "./components/Navbar";

import { Footer } from "./components/Footer";

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
  return (
    <html className="h-full bg-white" lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="">
        <Navbar />
        <main className="pb-8 pt-5">
          <Outlet />
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
