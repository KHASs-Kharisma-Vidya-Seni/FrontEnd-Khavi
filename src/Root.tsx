import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  // w-10/12
  return (
    <div className="mx-auto h-screen px-5 font-serif lg:container lg:px-0 ">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
