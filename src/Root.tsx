import { useLocation, Outlet, matchPath } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
// import { useAuth } from "./hooks/use-auth";
import ScrollToTop from "./hooks/use-scroll-up";

const Root = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isForumPage = location.pathname === "/forum";
  const isScannerPage = location.pathname === "/face-scanner";
  const isProfile = matchPath("/profile/*", location.pathname);
  // const { currentUser } = useAuth();

  return (
    <div className="overflow-x-hidden font-serif">
      <ScrollToTop />
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

      {!isAuthPage && !isProfile && !isForumPage && !isScannerPage && <Footer />}
    </div>
  );
};

export default Root;
