// src/pages/Products.jsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { COMPANY_INFO, PRODUCT_BRANDS, PRODUCT_SPECS } from '../utils/constants';
import './pageStyles/Products.css';

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState('NANDITA GOLD');

  return (
    <>
      <Helmet>
        <title>Our Products - {COMPANY_INFO.tradeName}</title>
        <meta name="description" content="Explore our range of premium notebooks including NANDITA GOLD, NANDITA SUPER, NANDITA JUMBO, and more. Quality stationery products." />
      </Helmet>

      <div className="products-page">
        <div className="container">
          <SectionTitle 
            title="Our Products"
            subtitle="Premium quality stationery for every need"
          />

          {/* Brand Filter */}
          <div className="brand-filter">
            {PRODUCT_BRANDS.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? 'primary' : 'outline'}
                size="small"
                onClick={() => setSelectedBrand(brand)}
                className="brand-filter-btn"
              >
                {brand}
              </Button>
            ))}
          </div>

          {/* Product Display */}
          <div className="product-display">
            {selectedBrand.includes('NANDITA') && PRODUCT_SPECS[selectedBrand] ? (
              <Card className="product-specs-card">
                <h2>{selectedBrand}</h2>
                {PRODUCT_SPECS[selectedBrand].sizes ? (
                  <div className="specs-section">
                    <h3>Available Sizes:</h3>
                    <div className="specs-tags">
                      {PRODUCT_SPECS[selectedBrand].sizes.map((size) => (
                        <span key={size} className="spec-tag">{size}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="specs-section">
                    <h3>Size: {PRODUCT_SPECS[selectedBrand].size}</h3>
                  </div>
                )}
                
                <div className="specs-section">
                  <h3>Pages Available:</h3>
                  <div className="specs-tags">
                    {PRODUCT_SPECS[selectedBrand].pages.map((page) => (
                      <span key={page} className="spec-tag">{page} Pages</span>
                    ))}
                  </div>
                </div>

                <div className="specs-section">
                  <h3>Binding Options:</h3>
                  <div className="specs-tags">
                    {PRODUCT_SPECS[selectedBrand].binding.map((bind) => (
                      <span key={bind} className="spec-tag binding-tag">
                        {bind === 'RL' ? 'Ruled' : 'Plain'}
                      </span>
                    ))}
                  </div>
                </div>

                <Button variant="primary" size="large" className="enquiry-btn">
                  Enquire Now
                </Button>
              </Card>
            ) : (
              <Card className="product-specs-card">
                <h2>{selectedBrand}</h2>
                <p>Premium quality stationery products available in various sizes and specifications.</p>
                <Button variant="primary" size="large" className="enquiry-btn">
                  Contact for Specifications
                </Button>
              </Card>
            )}
          </div>

          {/* All Brands Grid */}
          <div className="all-brands-section">
            <h3>All Our Brands</h3>
            <div className="brands-full-grid">
              {PRODUCT_BRANDS.map((brand) => (
                <Card key={brand} className="brand-grid-card">
                  <h4>{brand}</h4>
                  <p>Premium Quality</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;