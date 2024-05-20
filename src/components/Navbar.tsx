import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar() {
  const navlists = [
    { name: "Home", link: "/" },
    { name: "Tentang", link: "/tentang" },
    { name: "Forum", link: "/forum" },
    { name: "Artikel", link: "/artikel" },
  ];
  return (
    <nav className="container flex h-24 items-center justify-between bg-shark-900 py-6">
      <figure className="flex ">
        <img src="/images/khavi-logo.png" alt="khavi-logo" className="w-28" />
      </figure>
      <ul className="flex items-center space-x-4">
        {navlists.map((navlist, index) => (
          <li key={index}>
            <NavLink
              to={navlist.link}
              className={({ isActive }) =>
                cn(
                  "relative inline-block text-xl text-wild-sand-50 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:content-[''] hover:after:h-[2px] hover:after:w-full hover:after:bg-laser-500",
                  isActive &&
                    "font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-laser-500 after:transition-all after:content-['']"
                )
              }>
              {navlist.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <Button variant="login">Masuk</Button>
        <Button variant="outline-white">Daftar</Button>
      </div>
    </nav>
  );
}

// isActive
//                   ? "text-xl font-bold text-wild-sand-50"
//                   : "text-xl text-wild-sand-50";
// relative inline-block transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:content-[''] hover:after:h-[2px] hover:after:w-full hover:after:bg-black
