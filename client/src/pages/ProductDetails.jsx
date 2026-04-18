import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from '../services/api';
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  // Order Form States
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  // Fetch Product
  useEffect(() => {
    api.get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        // Fetch related products (same category, excluding current)
        if (res.data.category) {
          api.get(`http://localhost:5000/api/products?category=${res.data.category}&limit=3`)
            .then((relRes) => {
              const filtered = relRes.data.filter(p => p._id !== res.data._id);
              setRelatedProducts(filtered.slice(0, 3));
            })
            .catch(err => console.error(err));
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Handle Order Logic
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if(!customerName || !phone) {
      alert("Please fill in Name and Phone Number");
      return;
    }
    
    setSubmitting(true);

    try {
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
    } catch (error) {
      alert("❌ Failed to place order");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!product) return <div className="details-loading">Loading Product Details...</div>;

  return (
    <div className="pd-container">
      
      {/* Breadcrumbs */}
      <div className="pd-breadcrumb">
        <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
      </div>

      <div className="pd-content">
        {/* Left Column: Big Image with zoom effect */}
        <div className="pd-image-section">
          <div className="pd-main-image">
            <img src={product.image || "https://via.placeholder.com/500?text=No+Image"} alt={product.name} />
          </div>
        </div>

        {/* Right Column: Details & Order Form */}
        <div className="pd-info-section">
          <h1 className="pd-title">{product.name}</h1>
          
          <div className="pd-meta">
            <span className="pd-sku">Product ID: {product._id.slice(-6)}</span>
            <span className="pd-stock in-stock">✓ In Stock</span>
          </div>

          <div className="pd-price-box">
            <h2 className="pd-price">₹{product.price}</h2>
            {product.oldPrice && <span className="pd-old-price">₹{product.oldPrice}</span>}
          </div>

          <p className="pd-description">
            {product.description || "Premium quality stationery from Netai Works."}
          </p>

          {/* INTEGRATED ORDER FORM */}
          <div className="pd-order-box">
            <h3>Quick Order</h3>
            <p className="order-note">Enter your details to place an order instantly.</p>
            
            <form onSubmit={handleOrderSubmit}>
              <div className="form-row">
                <input 
                  type="text" 
                  className="order-input" 
                  placeholder="Your Name" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  required
                />
              </div>
              <div className="form-row">
                <input 
                  type="tel" 
                  className="order-input" 
                  placeholder="Phone Number" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="pd-actions">
                <div className="quantity-selector">
                  <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button>
                  <input type="text" value={quantity} readOnly />
                  <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
                </div>
                
                <button type="submit" className="btn-add-cart" disabled={submitting}>
                  {submitting ? "Placing Order..." : "Place Order Now"}
                </button>
              </div>
            </form>
          </div>

          <div className="pd-extras">
            <div className="pd-extra-item">
              <strong>Category:</strong> {product.category || "General"}
            </div>
            {product.material && (
              <div className="pd-extra-item">
                <strong>Material:</strong> {product.material}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Tabs with animation */}
      <div className="pd-tabs-section">
        <ul className="pd-tabs-nav">
          <li className="active">Description</li>
          <li>Specifications</li>
          <li>Reviews (0)</li>
        </ul>
        <div className="pd-tab-content">
          <div className="tab-pane active">
            <p>{product.description || "No additional description available."}</p>
          </div>
          <div className="tab-pane">
            <ul className="spec-list">
              <li><strong>Brand:</strong> Netai Stationery Works</li>
              <li><strong>Quality:</strong> Premium</li>
              <li><strong>Eco-friendly:</strong> Yes</li>
            </ul>
          </div>
          <div className="tab-pane">
            <p>No reviews yet. Be the first to review this product.</p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pd-related">
          <h3>You May Also Like</h3>
          <div className="related-grid">
            {relatedProducts.map(rel => (
              <Link to={`/products/${rel._id}`} key={rel._id} className="related-card">
                <img src={rel.image || "/book.jpg"} alt={rel.name} />
                <h4>{rel.name}</h4>
                <span className="related-price">₹{rel.price}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductDetails;