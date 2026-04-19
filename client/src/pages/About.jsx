// src/pages/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import { COMPANY_INFO, TEAM_MEMBERS } from '../utils/constants';
import './pageStyles//About.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - {COMPANY_INFO.tradeName}</title>
        <meta name="description" content="Learn about NETAI STATIONERY WORKS PVT. LTD., Kolkata's premier stationery manufacturer. Our team, mission, and values." />
      </Helmet>

      <div className="about-page">
        <div className="container">
          <SectionTitle 
            title="About Netai Stationery"
            subtitle="Excellence in Stationery Manufacturing"
          />

          <Card className="about-card">
            <h2>Our Story</h2>
            <p>
              {COMPANY_INFO.legalName} is a premier stationery manufacturer based in Kolkata, 
              West Bengal. Established with a vision to provide high-quality stationery products, 
              we have grown to become a trusted name in the industry.
            </p>
            <p>
              Our state-of-the-art manufacturing facility is equipped with modern machinery 
              and staffed by skilled professionals who ensure every product meets our 
              stringent quality standards.
            </p>
          </Card>

          <div className="about-grid">
            <Card className="info-card">
              <h3>📍 Principal Office</h3>
              <p>{COMPANY_INFO.address.principal.building}, {COMPANY_INFO.address.principal.street}</p>
              <p>{COMPANY_INFO.address.principal.area}, {COMPANY_INFO.address.principal.city}</p>
              <p>{COMPANY_INFO.address.principal.state} - {COMPANY_INFO.address.principal.pincode}</p>
            </Card>

            <Card className="info-card">
              <h3>🏭 Additional Location</h3>
              <p>{COMPANY_INFO.address.additional.building}, {COMPANY_INFO.address.additional.street}</p>
              <p>{COMPANY_INFO.address.additional.area}, {COMPANY_INFO.address.additional.city}</p>
              <p>{COMPANY_INFO.address.additional.state} - {COMPANY_INFO.address.additional.pincode}</p>
            </Card>

            <Card className="info-card">
              <h3>📋 Company Details</h3>
              <p><strong>GST:</strong> {COMPANY_INFO.gst}</p>
              <p><strong>Constitution:</strong> Private Limited Company</p>
              <p><strong>Registration:</strong> Regular (Since 2025)</p>
            </Card>
          </div>

          <SectionTitle 
            title="Our Team"
            subtitle="Meet the people behind our success"
          />

          <div className="team-full-grid">
            <div className="team-section-full">
              <h3>Board of Directors</h3>
              <div className="team-list">
                {TEAM_MEMBERS.directors.map((member) => (
                  <Card key={member.name} className="team-list-item">
                    <h4>{member.name}</h4>
                    <p className="designation">{member.designation}</p>
                    {member.phone && <p className="phone">{member.phone}</p>}
                  </Card>
                ))}
              </div>
            </div>

            <div className="team-section-full">
              <h3>Management Team</h3>
              <div className="team-list">
                {TEAM_MEMBERS.management.map((member) => (
                  <Card key={member.name} className="team-list-item">
                    <h4>{member.name}</h4>
                    <p className="designation">{member.designation}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="team-section-full">
              <h3>Production Unit</h3>
              <div className="team-list">
                {TEAM_MEMBERS.productionUnit.map((member) => (
                  <Card key={member.name} className="team-list-item">
                    <h4>{member.name}</h4>
                    <p className="designation">{member.role}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;