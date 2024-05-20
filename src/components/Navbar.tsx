import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navlists = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Profil", link: "/profile" },
    { name: "Article", link: "/article" },
  ];
  return (
    <nav className="container py-6">
      <ul className="flex space-x-4">
        {navlists.map((navlist, index) => (
          <li key={index}>
            <NavLink
              to={navlist.link}
              className={({ isActive }) => {
                return isActive
                  ? "text-xl text-blue-600"
                  : "text-xl text-black";
              }}>
              {navlist.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
