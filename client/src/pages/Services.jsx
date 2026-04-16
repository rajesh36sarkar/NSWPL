import React from "react";
import "../styles/services.css";
import heroBg from "../assets/images/services-hero.jpeg";
import { 
  FaPenFancy, 
  FaBox, 
  FaPrint, 
  FaIndustry, 
  FaTruck, 
  FaClipboardCheck,
  FaCheckCircle,
  FaComments,
  FaPencilRuler,
  FaCogs,
  FaShippingFast 
} from "react-icons/fa";

const Services = () => {
  // Services data
  const services = [
    {
      id: 1,
      icon: <FaPenFancy />,
      title: "Custom Stationery Design",
      description: "Tailored stationery solutions that reflect your brand identity and meet your specific requirements.",
      features: [
        "Corporate notebooks and diaries",
        "Customized office supplies",
        "Branded stationery kits",
        "Premium writing instruments",
        "Customized filing solutions"
      ]
    },
    {
      id: 2,
      icon: <FaBox />,
      title: "Packaging Solutions",
      description: "Innovative and eco-friendly packaging designs that enhance product presentation and protection.",
      features: [
        "Custom product packaging",
        "Eco-friendly packaging materials",
        "Gift and promotional packaging",
        "Retail display solutions",
        "Shipping and logistics packaging"
      ]
    },
    {
      id: 3,
      icon: <FaPrint />,
      title: "Commercial Printing",
      description: "High-quality printing services for marketing materials, publications, and corporate documents.",
      features: [
        "Marketing collateral (brochures, flyers, catalogs)",
        "Business cards and letterheads",
        "Posters and banners",
        "Corporate reports and publications",
        "Customized calendars and planners"
      ]
    },
    {
      id: 4,
      icon: <FaIndustry />,
      title: "Bulk Manufacturing",
      description: "Large-scale production capabilities to meet high-volume requirements with consistent quality.",
      features: [
        "School notebook production",
        "Corporate diary manufacturing",
        "Register and ledger production",
        "Custom binding options",
        "Quality-controlled mass production"
      ]
    },
    {
      id: 5,
      icon: <FaTruck />,
      title: "Supply Chain Management",
      description: "Efficient inventory management and distribution solutions to streamline your operations.",
      features: [
        "Inventory planning and forecasting",
        "Warehousing and storage",
        "Order fulfillment",
        "PAN India delivery network",
        "Real-time tracking"
      ]
    },
    {
      id: 6,
      icon: <FaClipboardCheck />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to ensure every product meets our high standards.",
      features: [
        "Multi-stage quality checks",
        "Material inspection",
        "Print quality verification",
        "Binding durability testing",
        "Final product audit"
      ]
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: "01",
      icon: <FaComments />,
      title: "Consultation",
      description: "We begin by understanding your requirements, objectives, and brand guidelines."
    },
    {
      step: "02",
      icon: <FaPencilRuler />,
      title: "Design & Planning",
      description: "Our team creates designs and develops a detailed plan for production."
    },
    {
      step: "03",
      icon: <FaCogs />,
      title: "Production",
      description: "We manufacture your products with rigorous quality control at every stage."
    },
    {
      step: "04",
      icon: <FaShippingFast />,
      title: "Delivery",
      description: "We ensure timely delivery and follow up to ensure your complete satisfaction."
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section 
        className="services-hero"
        style={{ backgroundImage: `linear-gradient(rgba(20,20,20,0.6), rgba(20,20,20,0.7)), url(${heroBg})` }}
      >
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>From custom design to bulk manufacturing, we provide end-to-end solutions for all your stationery and printing needs.</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="services-intro">
        <div className="services-container">
          <div className="intro-header">
            <span className="intro-label">What We Offer</span>
            <h2>Comprehensive Stationery & Printing Solutions</h2>
            <p>With over 28 years of experience, Netai Stationery Works delivers premium quality products and customized solutions for educational institutions, corporate clients, and retailers across India.</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service) => (
              <div className="service-card" key={service.id}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheckCircle className="check-icon" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="services-container">
          <div className="process-header">
            <span className="intro-label">How We Work</span>
            <h2>Our Process</h2>
            <p>We follow a structured approach to ensure that every project is completed to the highest standards and meets your expectations.</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-card" key={index}>
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today to discuss your stationery and printing requirements. We're here to help bring your ideas to life.</p>
            <a href="/contact" className="cta-button">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;