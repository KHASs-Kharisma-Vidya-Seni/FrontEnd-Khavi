import Container from "@/components/Container";
import Sidebar from "@/components/modules/Profile/sidebar";

import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";

export default function ProfileRoot() {
  const location = useLocation();
  const { logout, currentUser } = useAuth();

  if(!currentUser || currentUser === null) {
    return <div className="flex h-screen w-screen items-center justify-center">Please login</div>
  }

  return (
    <div>
      <div className="fixed left-0 top-1/2 block xl:hidden">
        <Sidebar />
      </div>
      <Container className="flex w-full justify-center overflow-y-hidden py-10">
        <div className="hidden h-full w-3/12 flex-col justify-between md:flex">
          <div id="main-side" className="static w-4/6 border-r">
            <h1 className="pb-6 text-2xl font-bold">User Profile</h1>
            <ul className="space-y-3 text-lg">
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
        </div>
        <div className="h-full w-9/12">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
