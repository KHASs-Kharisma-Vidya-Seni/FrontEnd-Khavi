import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Root() {
  return (
    <div className="container mx-auto w-10/12">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
