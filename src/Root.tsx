import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  // w-10/12
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
