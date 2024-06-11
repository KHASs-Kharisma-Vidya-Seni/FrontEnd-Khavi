import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { MenuIcon } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { User, useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface NavItem {
  name: string;
  link: string;
}

export default function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isScrolled = useScrollPosition();

  const { currentUser } = useAuth();

  const navLinks: NavItem[] = [
    { name: "Home", link: "/" },
    { name: "Tentang", link: "/tentang" },
    { name: "Forum", link: "/forum" },
    { name: "Artikel", link: "/artikel" },
    // { name: 'Profile', link: '/profile' },
    { name: "Analis", link: "/face-scanner" },
  ];

  const bgNavBlur =
    "transition-all ease-in-out duration-300 bg-black bg-opacity-50 backdrop-blur-[10px] w-4/5 rounded-lg px-8";

  return (
    <div className={cn("relative z-50 mx-auto flex h-24 w-full justify-center", isScrolled && "py-2")}>
      <nav
        className={cn(
          "transition-backdrop ease fixed mx-auto flex h-24 w-full items-center justify-between bg-shark-900 px-4 py-6 shadow-md transition-all duration-300 ease-in lg:px-20",
          isScrolled && bgNavBlur
        )}
      >
        <figure className="flex">
          <HashLink to="/#home">
            <img src="/images/khavi-logo.png" alt="khavi-logo" className="w-28" />
          </HashLink>
        </figure>
        {isDesktop ? (
          <DesktopView currentUser={currentUser || undefined} navLinks={navLinks} />
        ) : (
          <MobileView currentUser={currentUser || undefined} navLinks={navLinks} />
        )}
      </nav>
    </div>
  );
}

interface CurrentUserWithOut extends Omit<User, "id" | "email" | "created_at"> {}

interface ViewProps {
  navLinks: NavItem[];
  currentUser?: CurrentUserWithOut;
}

function DesktopView({ navLinks, currentUser }: ViewProps) {
  return (
    <>
      <NavLinks navLinks={navLinks} />
      {currentUser ? <AvatarProfile {...currentUser} /> : <AuthButtons />}
    </>
  );
}

function MobileView({ navLinks, currentUser }: ViewProps) {
  return (
    <Drawer direction="right">
      <DrawerTrigger>
        <MenuIcon color="white" />
      </DrawerTrigger>
      <DrawerContent>
        <div className="px-6 py-8">
          <NavLinks navLinks={navLinks} />
          {currentUser ? <AvatarProfile {...currentUser} /> : <AuthButtons />}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

function NavLinks({ navLinks }: ViewProps) {
  return (
    <ul className="flex flex-col justify-center gap-y-5 pb-4 lg:flex-row lg:items-center lg:space-x-4 lg:pb-0">
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
    <div className="flex flex-col gap-2 lg:flex-row">
      <Button variant="login">
        <Link to="/login">Masuk</Link>
      </Button>
      <Button variant="outline-white">
        <Link to="/register">Daftar</Link>
      </Button>
    </div>
  );
}

function AvatarProfile(currentUser: CurrentUserWithOut) {
  return (
    <Link to="/profile">
      <div className="flex items-center justify-normal gap-x-4 lg:justify-center">
        <figure className="relative">
          <Avatar className="flex h-10 w-10 items-center justify-center before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-full before:bg-black before:opacity-0 before:transition-all before:hover:opacity-35">
            <AvatarImage className="object-cover" src={currentUser?.photoURL} />
            <AvatarFallback>{currentUser?.username}</AvatarFallback>
          </Avatar>
        </figure>
        <p className="text-white hover:text-gray-400">{currentUser?.username}</p>
      </div>
    </Link>
  );
}
