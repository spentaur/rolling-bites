import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Navbar } from "~/components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pb-8 pt-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
