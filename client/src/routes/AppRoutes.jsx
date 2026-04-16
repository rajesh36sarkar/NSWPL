import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import BlankLayout from "../components/layout/BlankLayout";

// Page imports
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Product from "../pages/Shop";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes with Header + Footer (Layout) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Routes WITHOUT Header + Footer (BlankLayout) */}
      <Route element={<BlankLayout />}>
        <Route path="/product" element={<Product />} />
        {/* Add other full‑width pages here if needed */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;