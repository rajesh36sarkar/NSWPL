// src/components/ui/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ children, className = '', hover = true, padding = true }) => {
  const cardClasses = `
    card 
    ${hover ? 'card-hover' : ''} 
    ${padding ? 'card-padding' : ''}
    ${className}
  `.trim();

  return <div className={cardClasses}>{children}</div>;
};

export default Card;