// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { COMPANY_INFO, PRODUCT_BRANDS, TEAM_MEMBERS } from '../utils/constants';
import './pageStyles/Home.css';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{COMPANY_INFO.tradeName} - Premium Stationery Manufacturer in Kolkata</title>
        <meta name="description" content="NETAI STATIONERY WORKS PVT. LTD. - Leading manufacturer of premium notebooks, registers, and stationery products in Kolkata. Quality products since 2025." />
      </Helmet>

      <div className="home-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Premium Stationery
                <span className="hero-highlight"> Made in Kolkata</span>
              </h1>
              <p className="hero-subtitle">
                Quality notebooks, registers, and custom stationery for businesses and individuals
              </p>
              <div className="hero-buttons">
                <Link to="/products">
                  <Button variant="primary" size="large">
                    Explore Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="large">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="brands-section">
          <div className="container">
            <SectionTitle 
              title="Our Premium Brands"
              subtitle="Quality stationery trusted by thousands"
            />
            <div className="brands-grid">
              {PRODUCT_BRANDS.slice(0, 6).map((brand) => (
                <Card key={brand} className="brand-card">
                  <h3>{brand}</h3>
                  <p>Premium Quality</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="features-grid">
              <Card className="feature-card">
                <div className="feature-icon">🏭</div>
                <h3>State-of-the-Art Manufacturing</h3>
                <p>Modern production facility in Kolkata with latest machinery</p>
              </Card>
              <Card className="feature-card">
                <div className="feature-icon">📦</div>
                <h3>Bulk Orders Welcome</h3>
                <p>Competitive pricing for schools, colleges, and businesses</p>
              </Card>
              <Card className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Quality Assured</h3>
                <p>Premium paper quality and perfect binding guaranteed</p>
              </Card>
              <Card className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3>Pan India Delivery</h3>
                <p>Fast and reliable shipping across India</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <SectionTitle 
              title="Leadership Team"
              subtitle="Experienced professionals driving excellence"
            />
            <div className="team-grid">
              {TEAM_MEMBERS.directors.map((member) => (
                <Card key={member.name} className="team-card">
                  <div className="team-avatar">👤</div>
                  <h3>{member.name}</h3>
                  <p className="team-designation">{member.designation}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Place an Order?</h2>
              <p>Contact us today for bulk orders and custom requirements</p>
              <Link to="/contact">
                <Button variant="secondary" size="large">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;