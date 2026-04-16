import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Public Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";   // ✅ Added Services page
import Team from "./pages/Team";
import FAQ from "./pages/FAQ";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main style={{ minHeight: "70vh" }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />   {/* ✅ New route */}
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;