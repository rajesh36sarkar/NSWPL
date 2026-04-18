import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
// import { AiOutlineWhatsApp } from "react-icons/ai";
// import { FaArrowUp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../../styles/components/footer.css";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = {
    facebook: "https://www.facebook.com/share/1HxoyMiKf8/",
    instagram: "https://www.instagram.com/netaistationery?igsh=em0xajE5a2FkbmF2",
    whatsapp: `https://wa.me/919830770400?text=${encodeURIComponent(
      "Hello! I'm interested in your stationery products."
    )}`,
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Content Grid */}
        <div className="footer-content">
          {/* Brand & Social */}
          <div className="footer-section brand-section">
            <h3>Netai Stationery Works</h3>
            <p>
              Premium stationery, notebooks, and custom printing solutions for
              students, professionals, and businesses since 1998.
            </p>
            <div className="social-icons">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <SlSocialFacebook />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <SlSocialInstagram />
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/shop">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/returns">Return Policy</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/admin/login">Admin Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section contact-section">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li><FaMapMarkerAlt /> 14B, Patwar Bagan Lane, Kolkata - 700009</li>
              <li><FaPhoneAlt /> +91 98307 70400</li>
              <li><FaEnvelope /> info@netai.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Netai Stationery Works Pvt. Ltd. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a href="https://www.linkedin.com/in/rajesh36sarkar/" target="_blank" rel="noopener noreferrer">
              Rajesh
            </a>
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