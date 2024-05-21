import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  // w-10/12
  return (
    <div className="font-serif">
      <header>
        <Navbar />
      </header>
      <main className="h-full w-full">
        <Outlet />
      </main>
    </div>
  );
}
