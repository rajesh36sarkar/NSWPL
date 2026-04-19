import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { NAVIGATION_LINKS } from '../../utils/constants';
import './commonStyles/Header.css';
import logo from "../../assets/logo/logoWithName.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      {/* MAIN NAVBAR */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            {/* LEFT LOGO - enlarged */}
            <div className="nav-left">
              <Link to="/" className="logo-wrapper">
                <img src={logo} alt="Netai Stationery Works" className="logo-image" />
              </Link>
            </div>

            {/* CENTER NAV - increased gap */}
            <nav className="nav-center">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${
                    location.pathname.startsWith(link.path) ? 'active' : ''
                  }`}
                >
                  {link.name}
                  <span className="nav-link-hover"></span>
                </Link>
              ))}
            </nav>

            {/* RIGHT SOCIAL - larger icons and more gap */}
            <div className="nav-right">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaWhatsapp /></a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* MOBILE MENU (kept commented as in original) */}
        {/* <div className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}>
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link-mobile ${
                location.pathname.startsWith(link.path) ? 'active' : ''
              }`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div> */}
      </div>
    </header>
  );
};

export default Header;