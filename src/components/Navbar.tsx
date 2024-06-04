import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu, MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { motion } from "framer-motion";

export default function Navbar() {
  const isDekstop = useMediaQuery("(min-width: 1024px)");

  const navlists = [
    { name: "Home", link: "/" },
    { name: "Tentang", link: "/tentang" },
    { name: "Forum", link: "/forum" },
    { name: "Artikel", link: "/artikel" },
    { name: "Profile", link: "/profile" },
  ];
  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-24 items-center justify-between bg-shark-900 px-5 py-6 xl:px-24">
      <figure className="flex ">
        <img src="/images/khavi-logo.png" alt="khavi-logo" className="w-28" />
      </figure>
      {isDekstop ? (
        <>
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
            <Button variant="login">
              <Link to="/login">Masuk</Link>
            </Button>
            <Button variant="outline-white">
              <Link to="/register">Daftar</Link>
            </Button>
          </div>
        </>
      ) : (
        <Drawer direction="right">
          <DrawerTrigger>
            <MenuIcon color="white" />
          </DrawerTrigger>
          <DrawerContent>
            <>
              <ul className="flex flex-col space-y-6 p-10 xl:flex-row xl:items-center xl:space-x-4 xl:p-0 ">
                {navlists.map((navlist, index) => (
                  <li key={index}>
                    <NavLink
                      to={navlist.link}
                      className={({ isActive }) =>
                        cn(
                          "relative inline-block text-xl text-wild-sand-50  transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:content-[''] hover:after:h-[2px] hover:after:w-full hover:after:bg-laser-500",
                          isActive &&
                            "font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-laser-500 after:transition-all after:content-['']"
                        )
                      }>
                      {navlist.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col space-y-6 p-10 xl:flex-row xl:items-center xl:space-x-4 xl:p-0 ">
                <Button variant="login">
                  <Link to="/login">Masuk</Link>
                </Button>
                <Button variant="outline-white">
                  <Link to="/register">Daftar</Link>
                </Button>
              </div>
            </>
          </DrawerContent>
        </Drawer>
      )}
    </motion.nav>
  );
}

const AnimatedNavList = ({
  navlist,
  index,
}: {
  navlist: { name: string; link: string };
  index: number;
}) => {
  return (
    <motion.li
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }} // Delay menerapkan stagger effect
    >
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
    </motion.li>
  );
};

const AnimatedNavListContainer = ({
  navlists,
}: {
  navlists: { name: string; link: string }[];
}) => {
  return (
    <ul className="flex items-center space-x-4">
      {navlists.map((navlist, index) => (
        <AnimatedNavList key={index} navlist={navlist} index={index} />
      ))}
    </ul>
  );
};
