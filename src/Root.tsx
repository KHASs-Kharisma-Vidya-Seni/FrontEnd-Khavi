import { useLocation, Outlet, matchPath } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const Root = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isForumPage = location.pathname === "/forum";
  const isProfile = matchPath("/profile/*", location.pathname);

  return (
    <div className="overflow-x-hidden font-serif">
      {!isAuthPage && (
        <header>
          <Navbar />
        </header>
      )}

      <main className="h-full w-full">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>

      {!isAuthPage && !isProfile && !isForumPage && <Footer />}
    </div>
  );
};

export default Root;
