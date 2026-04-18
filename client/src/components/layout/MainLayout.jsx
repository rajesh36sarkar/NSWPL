import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.css"; // optional, for styling

const MainLayout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {/* Skip to main content for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;