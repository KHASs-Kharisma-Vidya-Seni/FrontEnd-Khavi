import AnimationPage from "@/components/AnimationPage";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export default function ProfileRoot() {
  const location = useLocation();
  return (
    <AnimationPage>
      <Container className="flex h-dvh w-full  justify-between overflow-y-hidden py-10">
        <div className="flex h-full w-3/12 flex-col justify-between">
          <div id="main-side" className="static w-4/6 border-r">
            <h1 className="pb-6 text-2xl font-bold">User Profile</h1>
            <ul className="space-y-3">
              {["user-info", "bookmark", "settings"].map((menu, index) => (
                <li key={index}>
                  <NavLink
                    to={`/profile/${menu}`}
                    className={({ isActive }) =>
                      twMerge([
                        "text-gray-400",
                        (isActive ||
                          (location.pathname === "/profile" &&
                            menu === "user-info")) &&
                          "text-blue-600",
                      ])
                    }>
                    {menu.replace("-", " ").toUpperCase()}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div id="auth" className="py-20">
              <Button variant="logout">Logout</Button>
            </div>
          </div>
        </div>
        <div className="h-full w-9/12  flex-grow">
          <Outlet />
        </div>
      </Container>
    </AnimationPage>
  );
}
