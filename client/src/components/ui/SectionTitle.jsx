// src/components/ui/SectionTitle.jsx
import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({ title, subtitle, centered = true, className = '' }) => {
  return (
    <div className={`section-title ${centered ? 'centered' : ''} ${className}`}>
      <h2 className="title-main">{title}</h2>
      {subtitle && <p className="title-subtitle">{subtitle}</p>}
      <div className="title-underline"></div>
    </div>
  );
};

export default SectionTitle;