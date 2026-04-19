// src/pages/Contact.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { COMPANY_INFO, TEAM_MEMBERS } from '../utils/constants';
import toast from 'react-hot-toast';
import './pageStyles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - {COMPANY_INFO.tradeName}</title>
        <meta name="description" content="Get in touch with NETAI STATIONERY WORKS PVT. LTD. Contact us for bulk orders, inquiries, or visit our office in Kolkata." />
      </Helmet>

      <div className="contact-page">
        <div className="container">
          <SectionTitle 
            title="Contact Us"
            subtitle="We'd love to hear from you"
          />

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info-section">
              <Card className="contact-info-card">
                <h3>📍 Principal Office</h3>
                <p>{COMPANY_INFO.address.principal.building}, {COMPANY_INFO.address.principal.street}</p>
                <p>{COMPANY_INFO.address.principal.area}</p>
                <p>{COMPANY_INFO.address.principal.city} - {COMPANY_INFO.address.principal.pincode}</p>
                <p>{COMPANY_INFO.address.principal.state}</p>
              </Card>

              <Card className="contact-info-card">
                <h3>🏭 Manufacturing Unit</h3>
                <p>Gr Floor, {COMPANY_INFO.address.additional.building}</p>
                <p>{COMPANY_INFO.address.additional.street}</p>
                <p>{COMPANY_INFO.address.additional.landmark}</p>
                <p>{COMPANY_INFO.address.additional.city} - {COMPANY_INFO.address.additional.pincode}</p>
              </Card>

              <Card className="contact-info-card">
                <h3>📞 Contact Details</h3>
                {COMPANY_INFO.phones.map((phone, index) => (
                  <p key={index}>
                    <a href={`tel:${phone}`}>{phone}</a>
                    {index === 0 && ' (MD)'}
                    {index === 1 && ' (CEO)'}
                  </p>
                ))}
                <p>
                  <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                </p>
                <p className="gst-text">GST: {COMPANY_INFO.gst}</p>
              </Card>

              <Card className="contact-info-card">
                <h3>👥 Key Contacts</h3>
                {TEAM_MEMBERS.directors.map((director) => (
                  <p key={director.name}>
                    <strong>{director.name}</strong> - {director.designation}
                    {director.phone && <span> | {director.phone}</span>}
                  </p>
                ))}
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="contact-form-card">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button type="submit" variant="primary" size="large" fullWidth>
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Map Placeholder */}
          <Card className="map-card">
            <h3>Our Location</h3>
            <div className="map-placeholder">
              <iframe 
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.491876234567!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjQiTiA4OMKwMjEnNTAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;