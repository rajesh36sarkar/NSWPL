import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BlankLayout = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change (consistent with other layouts)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
    </>
  );
};

export default BlankLayout;