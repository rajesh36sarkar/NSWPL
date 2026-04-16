import React, { useEffect, useState } from "react";
import "../styles/about.css";

// Import team images (same as your Team component)
import adhir from "../assets/images/A.K.Saha.jpg.jpeg";
import kk from "../assets/images/K.K.Saha.png.jpeg";
import ayan from "../assets/images/Ayan saha.jpeg";
import lion from "../assets/images/Lion Saha.jpeg";
import noone from "../assets/images/No one dp.jpg";

const About = () => {
  // Animation on scroll – simple fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // FAQ state (accordion)
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Team members data (reused from earlier)
  const teamMembers = [
    {
      id: 1,
      name: "Adhir Kumar Saha",
      role: "Managing Director (MD)",
      image: adhir,
    },
    {
      id: 2,
      name: "Kamal Kumar Saha",
      role: "Chief Executive Officer (CEO)",
      image: kk,
    },
    {
      id: 3,
      name: "Kanan Bala Saha",
      role: "Director",
      image: noone,
    },
    {
      id: 4,
      name: "Antara Saha",
      role: "Director",
      image: noone,
    },
    {
      id: 5,
      name: "Chirenjit Dey",
      role: "Manager",
      image: noone,
    },
    {
      id: 6,
      name: "Bappaditya Maity",
      role: "Accountant",
      image: noone,
    },
    {
      id: 7,
      name: "Ayan Saha",
      role: "Accountant",
      image: ayan,
    },
    {
      id: 8,
      name: "Subhrajoti Saha",
      role: "Digital Support",
      image: lion,
    },
    {
      id: 9,
      name: "MD Halim",
      role: "Senior Worker",
      image: noone,
    },
    {
      id: 10,
      name: "Raju Gazi",
      role: "Skilled Worker",
      image: noone,
    },
    {
      id: 11,
      name: "Safik Gazi",
      role: "Skilled Worker",
      image: noone,
    },
    {
      id: 12,
      name: "MD Parwez",
      role: "Production Worker",
      image: noone,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "What products do you manufacture and supply?",
      answer:
        "We manufacture a wide range of stationery items including Nandita Gold exercise notebooks, practical notebooks, drawing books, and office registers. We also supply pens, files, and general office and school stationery.",
    },
    {
      question: "Do you offer bulk or wholesale pricing?",
      answer:
        "Yes, as a manufacturer and B2B supplier, we specialize in bulk orders for schools, corporate offices, and retailers. Please contact our sales team directly for wholesale price lists.",
    },
    {
      question: "Where is your factory located?",
      answer:
        "Our registered office and works are located at 14B, Patwar Bagan Lane, Kolkata - 700009, West Bengal. We also have a presence near the Jorakhana Stoppage in Prafulla Kanan.",
    },
    {
      question: "Can I customize notebooks with my school or company logo?",
      answer:
        "Yes, we offer customization services for bulk orders. We can print your school or company logo on notebook covers. Minimum order quantities apply for custom print runs.",
    },
    {
      question: "What are your delivery options?",
      answer:
        "We deliver across Kolkata and West Bengal. For larger bulk orders, we can arrange logistics for delivery pan-India. Standard delivery times vary based on order size and location.",
    },
    {
      question: "What is your return policy?",
      answer:
        "Goods once sold are generally not returnable. However, if you receive items in damaged condition or with manufacturing defects, please report it within 48 hours of delivery for a replacement.",
    },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Netai Stationery Works</h1>
          <p>Crafting quality since 1998 – your trusted partner in stationery.</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story fade-up">
        <div className="container">
          <div className="story-grid">
            <div className="story-text">
              <span className="section-badge">Our Journey</span>
              <h2>From Humble Beginnings to Industry Leader</h2>
              <p>
                Netai Stationery Works started as a small family-owned workshop in Kolkata with a vision to provide high‑quality, affordable stationery to students and professionals. Over 25 years, we have grown into a trusted manufacturer and supplier, known for our commitment to excellence, innovation, and customer satisfaction.
              </p>
              <p>
                Today, we serve thousands of happy customers across West Bengal and beyond, offering a wide range of notebooks, office supplies, and custom printing solutions. Our state‑of‑the‑art facilities and dedicated team ensure every product meets the highest standards.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Team Members</span>
                </div>
                <div className="stat">
                  <span className="stat-number">1000+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">🏭</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision fade-up">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <div className="mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide high-quality, affordable stationery products that inspire learning and productivity, while maintaining ethical business practices and exceptional customer service.
              </p>
            </div>
            <div className="mv-card vision">
              <div className="mv-icon">👁️</div>
              <h3>Our Vision</h3>
              <p>
                To become the most trusted and preferred stationery brand in India, known for innovation, sustainability, and unwavering quality, reaching every student and professional across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values fade-up">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-badge">Our Values</span>
            <h2>What Drives Us Forward</h2>
            <p>The principles that guide our work and shape our culture</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Excellence</h3>
              <p>We strive for perfection in every product we create and every service we deliver.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>Honesty and transparency form the foundation of all our relationships.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Continuously evolving to meet the changing needs of our customers.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h3>Teamwork</h3>
              <p>Collaboration and mutual respect drive our collective success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section fade-up">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-badge">Our People</span>
            <h2>Meet Our Leadership & Staff</h2>
            <p>The dedicated professionals behind Netai Stationery Works</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div className="team-card" key={member.id}>
                <div className="member-image-wrapper">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay">
                    <div className="social-icons">
                      <a href="#" className="social-icon">📘</a>
                      <a href="#" className="social-icon">🔗</a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <span className="member-role">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section fade-up">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-badge">Common Questions</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to what you want to know</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div
                className={`faq-item ${openFaq === idx ? "open" : ""}`}
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  {faq.question}
                  <span className="faq-icon">{openFaq === idx ? "−" : "+"}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta fade-up">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to work with us?</h2>
            <p>Whether you have a question about our products or want to place a bulk order, we're here to help.</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn-primary">Contact Us</a>
              <a href="/shop" className="btn-secondary">Browse Shop</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;