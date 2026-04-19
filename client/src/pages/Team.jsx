// src/pages/Team.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { COMPANY_INFO } from "../utils/constants";
import "./pageStyles/pageStyles/Team.css";

// Image imports (you'll need to add actual images later)
import adhir from "../assets/office/adhir saha.jpeg";
import kamal from "../assets/office/kamal saha.jpeg";
import antara from "../assets/office/antara saha.jpeg";
import ayan from "../assets/office/ayan saha.jpeg";
import bappa from "../assets/office/bappa.jpeg";
import joyti from "../assets/office/joyti.webp";
import noone from "../assets/";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Adhir Kumar Saha",
      role: "Managing Director (MD)",
      image: adhir,
      category: "leadership",
    },
    {
      id: 2,
      name: "Kamal Kumar Saha",
      role: "Chief Executive Officer (CEO)",
      image: kamal,
      category: "leadership",
    },
    {
      id: 3,
      name: "Kanan Bala Saha",
      role: "Director",
      image: noone,
      category: "leadership",
    },
    {
      id: 4,
      name: "Antara Saha",
      role: "Director",
      image: antara,
      category: "leadership",
    },
    {
      id: 5,
      name: "Chiranjit Dey",
      role: "Manager",
      image: noone,
      category: "management",
    },
    {
      id: 6,
      name: "Bappaditya Maity",
      role: "Accountant",
      image: bappa,
      category: "staff",
    },
    {
      id: 7,
      name: "Ayan Saha",
      role: "Accountant",
      image: ayan,
      category: "staff",
    },
    {
      id: 8,
      name: "Subhrajoti Saha",
      role: "Digital Support",
      image: joyti,
      category: "staff",
    },
    {
      id: 9,
      name: "MD Halim",
      role: "Production Worker",
      image: noone,
      category: "staff",
    },
    {
      id: 10,
      name: "Raju Gazi",
      role: "Production Worker",
      image: noone,
      category: "staff",
    },
    {
      id: 11,
      name: "Safik Gazi",
      role: "Production Worker",
      image: noone,
      category: "staff",
    },
    {
      id: 12,
      name: "MD Parwez",
      role: "Production Worker",
      image: noone,
      category: "staff",
    },
  ];

  const leadershipTeam = teamMembers.filter(member => member.category === "leadership");
  const managementTeam = teamMembers.filter(member => member.category === "management");
  const staffTeam = teamMembers.filter(member => member.category === "staff");

  const TeamSection = ({ title, members }) => (
    members.length > 0 ? (
      <div className="team-section">
        <div className="section-header">
          <h2>{title}</h2>
          <div className="section-divider"></div>
        </div>
        <div className="team-grid">
          {members.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="member-image-wrapper">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="social-icons">
                    <a href="#" className="social-icon" aria-label="Facebook">📘</a>
                    <a href="#" className="social-icon" aria-label="LinkedIn">🔗</a>
                    <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
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
    ) : null
  );

  return (
    <>
      <Helmet>
        <title>Our Team - {COMPANY_INFO.tradeName}</title>
        <meta name="description" content="Meet the dedicated team behind Netai Stationery Works. Leadership, management, and skilled workers committed to excellence." />
      </Helmet>

      <div className="team-page">
        {/* Hero Section */}
        <section className="team-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Meet Our Team</h1>
            <p>Dedicated professionals behind Netai Stationery Works' excellence</p>
            <div className="hero-stats">
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
        </section>

        {/* Company Overview Section */}
        <section className="company-overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-content">
                <span className="section-badge">About Us</span>
                <h2>Crafting Quality Since 2025</h2>
                <p>
                  Netai Stationery Works has been a trusted name in the stationery industry, 
                  delivering premium quality products that inspire creativity and productivity. 
                  Our commitment to excellence, innovation, and customer satisfaction has made 
                  us a preferred partner for businesses and individuals alike.
                </p>
                <p>
                  From humble beginnings to becoming a leading stationery manufacturer, 
                  we take pride in our dedicated team whose passion and expertise drive 
                  our success every day.
                </p>
                <div className="overview-features">
                  <div className="feature">
                    <span className="feature-icon">🏭</span>
                    <div>
                      <h4>Modern Manufacturing</h4>
                      <p>State-of-the-art facilities</p>
                    </div>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🌱</span>
                    <div>
                      <h4>Eco-Friendly</h4>
                      <p>Sustainable practices</p>
                    </div>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">⭐</span>
                    <div>
                      <h4>Quality Assured</h4>
                      <p>Premium materials</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overview-image">
                <div className="image-placeholder">
                  <div className="placeholder-icon">📦</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="core-values">
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

        {/* Team Sections */}
        <section className="team-showcase">
          <div className="container">
            <div className="section-header-centered">
              <span className="section-badge">Our People</span>
              <h2>The Faces Behind Our Success</h2>
              <p>Meet the dedicated professionals who make Netai Stationery Works exceptional</p>
            </div>

            <TeamSection title="Leadership Team" members={leadershipTeam} />
            <TeamSection title="Management" members={managementTeam} />
            <TeamSection title="Our Skilled Staff" members={staffTeam} />
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="contact-cta">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Work With Us?</h2>
              <p>Let's collaborate to bring your stationery needs to life with quality and precision.</p>
              <div className="cta-buttons">
                <button className="btn-primary">Contact Our Team</button>
                <button className="btn-secondary">Request a Quote</button>
              </div>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>7044189887</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>nswplsaha@yahoo.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Kolkata, West Bengal, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;