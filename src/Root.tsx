import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  // w-10/12
  return (
    <div className="container mx-auto h-screen px-5 font-serif md:container">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
