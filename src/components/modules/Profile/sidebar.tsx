import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import SVG from "@/components/modules/profile/sidebutton";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();
  return (
    <div>
      <Drawer direction="left">
        <DrawerTrigger>
          <div>
            <SVG />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-full w-full bg-white px-20 py-20">
            <h1 className="pb-6 text-2xl font-bold">User Profile</h1>
            <ul className="mb-64 space-y-3 text-lg">
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    cn("text-gray-400", isActive && location.pathname === "/profile" && "font-bold text-blue-600")
                  }
                >
                  User Info
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile/bookmark"
                  className={({ isActive }) => cn("text-gray-400", isActive && "font-bold text-blue-600")}
                >
                  Bookmark
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile/settings"
                  className={({ isActive }) => cn("text-gray-400", isActive && "font-bold text-blue-600")}
                >
                  Settings
                </NavLink>
              </li>
            </ul>
            <div id="auth" className="py-20">
              <Button onClick={logout} variant="logout">
                Logout
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
