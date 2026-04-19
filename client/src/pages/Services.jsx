// src/pages/Services.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { COMPANY_INFO } from '../utils/constants';
import './pageStyles/Services.css';

const Services = () => {
  const services = [
    {
      icon: '📓',
      title: 'Custom Notebooks',
      description: 'Personalized notebooks for schools, colleges, and corporate gifting'
    },
    {
      icon: '📊',
      title: 'Registers & Ledgers',
      description: 'High-quality registers for accounting and record keeping'
    },
    {
      icon: '📦',
      title: 'Bulk Manufacturing',
      description: 'Large-scale production for institutions and businesses'
    },
    {
      icon: '✏️',
      title: 'Drawing Books',
      description: 'Premium quality drawing and sketch books for artists'
    },
    {
      icon: '🎨',
      title: 'Custom Branding',
      description: 'Your brand on our quality stationery products'
    },
    {
      icon: '🚛',
      title: 'Pan India Shipping',
      description: 'Reliable delivery across all states in India'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - {COMPANY_INFO.tradeName}</title>
        <meta name="description" content="Comprehensive stationery manufacturing services including custom notebooks, registers, bulk orders, and pan India delivery." />
      </Helmet>

      <div className="services-page">
        <div className="container">
          <SectionTitle 
            title="Our Services"
            subtitle="Comprehensive stationery solutions for every need"
          />

          <div className="services-grid">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Card>
            ))}
          </div>

          <Card className="bulk-order-card">
            <h2>Interested in Bulk Orders?</h2>
            <p>We offer special pricing for schools, colleges, corporate offices, and institutions. Contact us for a customized quote.</p>
            <a href="/contact" className="btn btn-primary">Get Quote</a>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Services;