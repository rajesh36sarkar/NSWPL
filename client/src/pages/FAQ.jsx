// src/pages/FAQ.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../utils/constants';
import './pageStyles/FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "What products do you manufacture and supply?",
      answer: "We manufacture a wide range of stationery items including Nandita Gold exercise notebooks, practical notebooks, drawing books, and office registers. We also supply pens, files, and general office and school stationery.",
      category: "products",
      open: false
    },
    {
      id: 2,
      question: "Do you offer bulk or wholesale pricing?",
      answer: "Yes, as a manufacturer and B2B supplier, we specialize in bulk orders for schools, corporate offices, and retailers. Please contact our sales team directly for wholesale price lists.",
      category: "pricing",
      open: false
    },
    {
      id: 3,
      question: "Where is your factory located?",
      answer: "Our registered office and works are located at 14B, Patwar Bagan Lane, Kolkata - 700009, West Bengal. We also have an additional facility at A-339, Thakdari Road, Kestopur, New Town.",
      category: "location",
      open: false
    },
    {
      id: 4,
      question: "Can I customize notebooks with my school or company logo?",
      answer: "Yes, we offer customization services for bulk orders. We can print your school or company logo on notebook covers. Minimum order quantities apply for custom print runs.",
      category: "customization",
      open: false
    },
    {
      id: 5,
      question: "What are your delivery options?",
      answer: "We deliver across Kolkata and West Bengal with 1-2 day delivery. For larger bulk orders, we can arrange logistics for delivery pan-India. Standard delivery times vary based on order size and location.",
      category: "shipping",
      open: false
    },
    {
      id: 6,
      question: "What is your return policy?",
      answer: "Goods once sold are generally not returnable. However, if you receive items in damaged condition or with manufacturing defects, please report it within 48 hours of delivery for a replacement.",
      category: "policy",
      open: false
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'products', label: 'Products' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'customization', label: 'Customization' },
    { id: 'shipping', label: 'Shipping' },
    { id: 'policy', label: 'Policy' },
    { id: 'location', label: 'Location' }
  ];

  const toggleFAQ = (id) => {
    setFaqs(faqs.map(faq => 
      faq.id === id ? { ...faq, open: !faq.open } : { ...faq, open: false }
    ));
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>FAQ - {COMPANY_INFO.tradeName}</title>
        <meta name="description" content="Find answers to frequently asked questions about Netai Stationery Works products, pricing, shipping, and customization services." />
      </Helmet>

      <div className="faq-page">
        <div className="faq-container">
          <div className="faq-header">
            <span className="section-badge">Support Center</span>
            <h1>Frequently Asked Questions</h1>
            <p>Find quick answers to common queries about our stationery products and services.</p>
          </div>

          <div className="faq-controls">
            <div className="search-wrapper">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search your question..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button className="clear-search" onClick={() => setSearchTerm('')}>✕</button>
              )}
            </div>

            <div className="category-filters">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="faq-list">
            {filteredFaqs.length === 0 ? (
              <div className="no-results">
                <span className="no-results-icon">📭</span>
                <p>No questions found matching your search.</p>
                <button className="reset-btn" onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}>
                  Clear filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq) => (
                <div 
                  className={`faq-item ${faq.open ? 'open' : ''}`} 
                  key={faq.id}
                >
                  <div 
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => e.key === 'Enter' && toggleFAQ(faq.id)}
                    aria-expanded={faq.open}
                  >
                    <span className="question-text">{faq.question}</span>
                    <span className="faq-icon">{faq.open ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <div className="answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="contact-support">
            <div className="support-card">
              <div className="support-icon">💬</div>
              <h3>Still have questions?</h3>
              <p>Our team is ready to help you with any specific inquiries.</p>
              <div className="support-buttons">
                <a href="/contact" className="btn-primary">Contact Support</a>
                <a href="/contact" className="btn-secondary">Request a Callback</a>
              </div>
              <div className="support-links">
                <a href={`mailto:${COMPANY_INFO.email}`}>✉️ {COMPANY_INFO.email}</a>
                <a href={`tel:${COMPANY_INFO.phones[0]}`}>📞 {COMPANY_INFO.phones[0]}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;