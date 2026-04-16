import React, { useState } from 'react';
import '../styles/Categories.css';
// Import hero background image (replace with your own)
import heroBg from '../assets/images/categories-hero.jpg';

const Categories = () => {
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  // Mock Data – replace with actual product images and details
  const products = [
    {
      id: 1,
      name: "Nandita Gold Notebook",
      category: "Notebooks",
      price: "₹45.00",
      image: "https://via.placeholder.com/300x300?text=Nandita+Gold",
      status: "Best Seller"
    },
    {
      id: 2,
      name: "Office Register (300 Pgs)",
      category: "Office Supplies",
      price: "₹120.00",
      image: "https://via.placeholder.com/300x300?text=Office+Register",
      status: "New"
    },
    {
      id: 3,
      name: "Practical Drawing Book",
      category: "Art Supplies",
      price: "₹65.00",
      image: "https://via.placeholder.com/300x300?text=Drawing+Book",
      status: ""
    },
    {
      id: 4,
      name: "Ball Point Pen Box (Blue)",
      category: "Writing",
      price: "₹150.00",
      image: "https://via.placeholder.com/300x300?text=Pen+Box",
      status: "Sale"
    },
    {
      id: 5,
      name: "A4 Cobra File",
      category: "Files & Folders",
      price: "₹25.00",
      image: "https://via.placeholder.com/300x300?text=Cobra+File",
      status: ""
    },
    {
      id: 6,
      name: "Executive Diary 2024",
      category: "Office Supplies",
      price: "₹350.00",
      image: "https://via.placeholder.com/300x300?text=Diary",
      status: "Premium"
    },
  ];

  const categories = ["All", "Notebooks", "Office Supplies", "Writing", "Art Supplies", "Files & Folders"];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="categories-page">
      {/* Hero Banner */}
      <section 
        className="categories-hero"
        style={{ backgroundImage: `linear-gradient(rgba(20,20,20,0.6), rgba(20,20,20,0.7)), url(${heroBg})` }}
      >
        <div className="categories-hero-content">
          <h1>Our Collection</h1>
          <p>Premium stationery for every need – from notebooks to office essentials</p>
        </div>
      </section>

      <div className="categories-container">
        {/* Mobile Filter Bar */}
        <div className="mobile-filter-bar">
          <button 
            className="filter-toggle-btn" 
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            {mobileFilterOpen ? 'Close Filters' : 'Show Filters'}
          </button>
          <span className="product-count">{filteredProducts.length} Products Found</span>
        </div>

        <div className="categories-layout">
          {/* Sidebar Filters */}
          <aside className={`categories-sidebar ${mobileFilterOpen ? 'show-mobile' : ''}`}>
            <div className="sidebar-section">
              <h3>Categories</h3>
              <ul>
                {categories.map((cat, index) => (
                  <li 
                    key={index} 
                    className={activeCategory === cat ? 'active' : ''}
                    onClick={() => { setActiveCategory(cat); setMobileFilterOpen(false); }}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>Price Range</h3>
              <div className="price-slider-mock">
                <div className="slider-track"></div>
                <div className="slider-range"></div>
              </div>
              <p className="price-range-label">₹10 – ₹1000</p>
            </div>

            <div className="sidebar-section">
              <h3>Brands</h3>
              <ul>
                <li><input type="checkbox" id="nandita" defaultChecked /> <label htmlFor="nandita">Nandita</label></li>
                <li><input type="checkbox" id="classmate" /> <label htmlFor="classmate">Classmate</label></li>
                <li><input type="checkbox" id="doms" /> <label htmlFor="doms">DOMS</label></li>
              </ul>
            </div>
          </aside>

          {/* Main Product Grid */}
          <main className="categories-main">
            <div className="categories-header">
              <h2>{activeCategory === 'All' ? 'All Stationery' : activeCategory}</h2>
              <div className="sort-options">
                <label>Sort by:</label>
                <select>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image-wrapper">
                    {product.status && <span className="product-badge">{product.status}</span>}
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <button className="btn-view">Quick View</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-cat-label">{product.category}</span>
                    <h4>{product.name}</h4>
                    <div className="product-price">{product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Categories;