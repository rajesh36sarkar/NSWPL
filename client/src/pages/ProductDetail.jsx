// src/components/product/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './pageStyles/ProductCard.css';

const ProductCard = ({ product }) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      <Link to={`/product/${product.slug}`} className="product-link">
        <div className="product-image">
          <img src={product.images[0]} alt={product.name} loading="lazy" />
          {discountPercentage > 0 && (
            <span className="discount-badge">-{discountPercentage}%</span>
          )}
          {product.stock < 10 && product.stock > 0 && (
            <span className="stock-badge low-stock">Only {product.stock} left</span>
          )}
          {product.stock === 0 && (
            <span className="stock-badge out-of-stock">Out of Stock</span>
          )}
        </div>
        
        <div className="product-info">
          <h3 className="product-title">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          
          <div className="product-price">
            <span className="current-price">₹{product.price}</span>
            {product.originalPrice && (
              <span className="original-price">₹{product.originalPrice}</span>
            )}
          </div>
          
          <div className="product-meta">
            <span className="rating">
              ★ {product.rating} ({product.reviews} reviews)
            </span>
            <span className={`delivery-badge ${product.freeDelivery ? 'free' : ''}`}>
              {product.freeDelivery ? 'Free Delivery' : 'Delivery ₹80'}
            </span>
          </div>
        </div>
      </Link>
      
      <button 
        className="btn-add-to-cart"
        disabled={product.stock === 0}
        onClick={() => {/* Add to cart logic */}}
      >
        {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;