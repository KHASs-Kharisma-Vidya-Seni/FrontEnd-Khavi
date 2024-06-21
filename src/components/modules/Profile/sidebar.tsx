import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import React from "react";
import SVG from "@/components/modules/Profile/sidebutton";

import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

export default function sidebar() {
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
          <div className="w-full h-full bg-white py-20 px-20">
            <h1 className="pb-6 text-2xl font-bold">User Profile</h1>
            <ul className="space-y-3 mb-64">
              {["user-info", "bookmark", "settings"].map((menu, index) => (
                <li key={index}>
                  <NavLink
                    to={`/profile/${menu}`}
                    className={({ isActive }) =>
                      cn([
                        "text-gray-400",
                        (isActive || (location.pathname === "/profile" && menu === "user-info")) && "text-blue-600",
                      ])
                    }
                  >
                    {menu.replace("-", " ").toUpperCase()}
                  </NavLink>
                </li>
              ))}
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
