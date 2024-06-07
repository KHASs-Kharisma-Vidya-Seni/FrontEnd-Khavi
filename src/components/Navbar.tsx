import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { motion } from "framer-motion";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ReactNode } from "react";

interface NavItem {
  name: string;
  link: string;
}

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isScrolled = useScrollPosition();
  
  const navLinks: NavItem[] = [
    { name: "Home", link: "/" },
    { name: "Tentang", link: "/tentang" },
    { name: "Forum", link: "/forum" },
    { name: "Artikel", link: "/artikel" },
    { name: "Profile", link: "/profile" },
    { name: "Analis", link: "/face-scanner" },
  ];

  const bgNavBlur =
    "transition-all ease-in-out duration-300 bg-black bg-opacity-50 backdrop-blur-[10px] w-4/5";

  const AnimateNav = ({ children }: { children: ReactNode }) => {
    return (
      <motion.div
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
      >
        {children}
      </motion.div>
    );
  };

  return (
    <AnimateNav>
      <div className="py-2 relative flex justify-center w-full h-24 mx-auto z-50">
        <nav
          className={cn(
            "max-w-[1200px] w-full mx-auto rounded-lg px-5 transition-all transition-backdrop ease duration-300 ease-in fixed flex h-24 items-center justify-between bg-shark-900 py-6 shadow-md",
            isScrolled && bgNavBlur
          )}
        >
          <figure className="flex">
            <Link to="/">
              <img src="/images/khavi-logo.png" alt="khavi-logo" className="w-28" />
            </Link>
          </figure>
          {isDesktop ? <DesktopView navLinks={navLinks} /> : <MobileView navLinks={navLinks} />}
        </nav>
      </div>
    </AnimateNav>
  );
}

interface ViewProps {
  navLinks: NavItem[];
}

function DesktopView({ navLinks }: ViewProps) {
  return (
    <>
      <NavLinks navLinks={navLinks} />
      <AuthButtons />
    </>
  );
}

function MobileView({ navLinks }: ViewProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <MenuIcon color="white" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="px-6 py-8">
          <NavLinks navLinks={navLinks} />
          <AuthButtons />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function NavLinks({ navLinks }: ViewProps) {
  return (
    <ul className="flex flex-col justify-center pb-4 lg:pb-0 lg:flex-row lg:items-center gap-y-5 lg:space-x-4">
      {navLinks.map((navLink, index) => (
        <li key={index}>
          <NavLink
            to={navLink.link}
            className={({ isActive }: { isActive: boolean }) =>
              cn(
                "relative inline-block text-xl text-wild-sand-50 transition-all after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:content-[''] hover:after:h-[2px] hover:after:w-full hover:after:bg-laser-500",
                isActive &&
                  "font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-laser-500 after:transition-all after:content-['']"
              )
            }
          >
            {navLink.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function AuthButtons() {
  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <Button variant="login">
        <Link to="/login">Masuk</Link>
      </Button>
      <Button variant="outline-white">
        <Link to="/register">Daftar</Link>
      </Button>
    </div>
  );
}
