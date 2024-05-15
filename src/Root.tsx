import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  // w-10/12
  return (
    <div className="container mx-auto px-5 font-serif md:container">
      <header>
        <Navbar />
      </header>
      <main className="h-full w-full">
        <Outlet />
      </main>
    </div>
  );
}
