import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/layout.css"; // optional, for skip link styling

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change (improves navigation UX)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;