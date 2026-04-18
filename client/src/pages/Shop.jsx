import React, { useState, useEffect } from "react";
import api from '../services/api';
import "../styles/Shop.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock product data (replace with real API call)
  const mockProducts = [
    {
      id: 1,
      name: "Nandita Gold 172pg",
      category: "Notebooks",
      price: 45,
      oldPrice: 50,
      rating: 5,
      image: "https://via.placeholder.com/300x350?text=Notebook+Gold",
      isNew: true,
      isSale: false,
      description: "Premium quality notebook with 172 pages, ideal for students and professionals.",
      stock: 50,
    },
    {
      id: 2,
      name: "Ball Pen Packet (Blue)",
      category: "Pens",
      price: 120,
      oldPrice: null,
      rating: 4,
      image: "https://via.placeholder.com/300x350?text=Blue+Pens",
      isNew: false,
      isSale: false,
      description: "Pack of 10 smooth-writing ball pens. Perfect for daily use.",
      stock: 120,
    },
    {
      id: 3,
      name: "A4 Office Copier Paper",
      category: "Paper",
      price: 280,
      oldPrice: 320,
      rating: 5,
      image: "https://via.placeholder.com/300x350?text=A4+Paper",
      isNew: false,
      isSale: true,
      description: "High-quality A4 paper for all your printing needs. 500 sheets per ream.",
      stock: 75,
    },
    {
      id: 4,
      name: "Executive Leather Diary",
      category: "Diaries",
      price: 450,
      oldPrice: null,
      rating: 5,
      image: "https://via.placeholder.com/300x350?text=Leather+Diary",
      isNew: true,
      isSale: false,
      description: "Genuine leather diary with ribbon bookmark. Perfect gift.",
      stock: 30,
    },
    {
      id: 5,
      name: "School Drawing Kit",
      category: "Art",
      price: 150,
      oldPrice: 180,
      rating: 4,
      image: "https://via.placeholder.com/300x350?text=Drawing+Kit",
      isNew: false,
      isSale: true,
      description: "Complete drawing kit for beginners: 12 pencils, eraser, sharpener, and sketchbook.",
      stock: 45,
    },
    {
      id: 6,
      name: "Cobra File Folder",
      category: "Files",
      price: 25,
      oldPrice: null,
      rating: 3,
      image: "https://via.placeholder.com/300x350?text=File+Folder",
      isNew: false,
      isSale: false,
      description: "Durable polypropylene file folder with elastic closure.",
      stock: 200,
    },
    {
      id: 7,
      name: "Nandita Spiral Notebook",
      category: "Notebooks",
      price: 60,
      oldPrice: 75,
      rating: 4,
      image: "https://via.placeholder.com/300x350?text=Spiral+Notebook",
      isNew: false,
      isSale: true,
      description: "Spiral bound notebook with 200 pages, perfect for college students.",
      stock: 85,
    },
    {
      id: 8,
      name: "Gel Pen Set (5 Colors)",
      category: "Pens",
      price: 200,
      oldPrice: 250,
      rating: 5,
      image: "https://via.placeholder.com/300x350?text=Gel+Pens",
      isNew: true,
      isSale: true,
      description: "Set of 5 vibrant gel pens, smooth writing experience.",
      stock: 40,
    },
  ];

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      // Extract unique categories
      const uniqueCategories = ["all", ...new Set(mockProducts.map(p => p.category))];
      setCategories(uniqueCategories);
      setLoading(false);
    }, 500);
  }, []);

  // Filter products based on category and search
  useEffect(() => {
    let result = products;
    if (selectedCategory !== "all") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchTerm.trim()) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, products]);

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? "star filled" : "star"}>★</span>
    ));
  };

  return (
    <div className="shop-page">
      {/* Hero Banner */}
      <div className="shop-hero">
        <div className="hero-content">
          <h1>Our Stationery Collection</h1>
          <p>Discover quality notebooks, pens, art supplies, and more</p>
        </div>
      </div>

      <div className="shop-container">
        {/* Filters Bar */}
        <div className="filters-bar">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
          <div className="category-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-chip ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "all" ? "All Products" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>Showing {filteredProducts.length} products</p>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="loading-spinner">Loading amazing products...</div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <div className="card-image">
                  <img src={product.image} alt={product.name} />
                  {product.isSale && <span className="badge sale">Sale</span>}
                  {product.isNew && <span className="badge new">New</span>}
                  <div className="card-overlay">
                    <button className="quick-view-btn" onClick={() => handleQuickView(product)}>
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="card-info">
                  <span className="card-category">{product.category}</span>
                  <h3 className="card-title">{product.name}</h3>
                  <div className="card-rating">{renderStars(product.rating)}</div>
                  <div className="card-price">
                    {product.oldPrice && <span className="old-price">₹{product.oldPrice}</span>}
                    <span className="current-price">₹{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProducts.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">📭</span>
            <p>No products found. Try a different search or category.</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

// ========== Product Modal Component ==========
const ProductModal = ({ product, onClose }) => {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (!customerName || !phone) {
      alert("Please fill in Name and Phone Number");
      return;
    }
    setSubmitting(true);
    try {
      // Replace with your actual API endpoint
      await api.post("http://localhost:5000/api/orders", {
        customerName,
        phone,
        productName: product.name,
        quantity,
      });
      alert("✅ Order placed successfully!");
      setCustomerName("");
      setPhone("");
      setQuantity(1);
      onClose();
    } catch (error) {
      alert("❌ Failed to place order");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-content">
          <div className="modal-image">
            <img src={product.image || "/book.jpg"} alt={product.name} />
          </div>
          <div className="modal-info">
            <h2>{product.name}</h2>
            <div className="modal-meta">
              <span className="modal-stock in-stock">✓ In Stock</span>
            </div>
            <div className="modal-price">
              ₹{product.price}
              {product.oldPrice && <span className="old-price">₹{product.oldPrice}</span>}
            </div>
            <p className="modal-description">
              {product.description || "Premium stationery from Netai Works."}
            </p>
            <div className="modal-order-box">
              <h3>Quick Order</h3>
              <form onSubmit={handleOrderSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <div className="modal-actions">
                  <div className="quantity-selector">
                    <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                    <input type="text" value={quantity} readOnly />
                    <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
                  </div>
                  <button type="submit" className="btn-order" disabled={submitting}>
                    {submitting ? "Placing..." : "Place Order"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;