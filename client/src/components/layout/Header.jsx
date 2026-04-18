import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IoSearchOutline,
  IoCartOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { AiOutlineWhatsApp } from "react-icons/ai";
import logo from "../../assets/icons/NSWPL_Logo.png";
import "../../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Social links (consistent with footer)
  const socialLinks = {
    facebook: "https://www.facebook.com/share/1HxoyMiKf8/",
    instagram: "https://www.instagram.com/netaistationery?igsh=em0xajE5a2FkbmF2",
    whatsapp: `https://wa.me/919830770400?text=${encodeURIComponent(
      "Hello! I'm interested in your stationery products."
    )}`,
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* BRAND */}
        <div className="brand">
          <img src={logo} alt="Netai Stationery Works" className="brand-icon" />
          <Link to="/" className="brand-name" onClick={closeMenu}>
            <span className="brand-full">Netai Stationery Works</span>
            <span className="brand-short">NSWPL</span>
          </Link>
        </div>

        {/* NAVIGATION (desktop + mobile) */}
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/services" className="nav-link" onClick={closeMenu}>
            Services
          </NavLink>
          <NavLink to="/shop" className="nav-link" onClick={closeMenu}>
            Product
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* ACTIONS (icons + mobile toggle) */}
        <div className="header-actions">
          <div className="social-icons-header">
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <SlSocialFacebook />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <SlSocialInstagram />
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;