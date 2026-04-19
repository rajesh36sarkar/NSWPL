// src/components/common/Footer.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { COMPANY_INFO } from "../../utils/constants";
import "./commonStyles/Footer.css";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-top">
          <div className="footer-top-left">
            <h4 className="brand-highlight">NETAI STATIONERY</h4>
            <p>Get updates about new products and special offers.</p>
          </div>
          <form className="footer-search" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="footer-input"
            />
            <button type="submit" aria-label="Subscribe" className="subscribe-btn">
              {isSubscribed ? '✓' : '→'}
            </button>
          </form>
        </div>

        <hr className="footer-divider" />

        {/* Main Links */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="brand-name">
              <span className="brand-highlight">NETAI</span> STATIONERY WORKS
            </h3>
            <p>
              Premium stationery, notebooks, and custom printing solutions for
              students, professionals, and businesses across India.
            </p>
            <p className="footer-gst-inline">GST: {COMPANY_INFO.gst}</p>
            
            {/* Social Icons */}
            <div className="footer-socials">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href={`https://wa.me/91${COMPANY_INFO.phones[0].replace(/\s/g, '')}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-links">
            <h5>Company</h5>
            <Link to="/about">About Us</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Products Links */}
          <div className="footer-links">
            <h5>Products</h5>
            <Link to="/products">All Products</Link>
            <Link to="/services">Services</Link>
            <Link to="/admin">Admin Login</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>

          {/* Legal Links */}
          <div className="footer-links">
            <h5>Legal & More</h5>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/shipping">Shipping Policy</Link>
            <Link to="/returns">Returns Policy</Link>
            <a
              href="https://rajesh36sarkar.github.io/portfolio-page/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              Developed by Rajesh Sarkar
            </a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.</p>
          <p className="made-with">
            Made with <span className="heart">❤️</span> in Kolkata
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop} aria-label="Back to top">
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;