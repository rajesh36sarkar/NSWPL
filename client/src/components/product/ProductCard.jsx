import { useNavigate } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import "../../styles/productCard.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Optional: if product has rating, stock, discount
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleWishlist = (e) => {
    e.stopPropagation();
    // Add to wishlist logic here
    console.log("Added to wishlist", product._id);
  };

  return (
    <div className="product-card" onClick={() => navigate(`/products/${product._id}`)}>
      {/* Image Section with Badges */}
      <div className="product-image-wrapper">
        <img
          src={product.image || "/book.jpg"}
          alt={product.name}
          className="product-img"
        />
        {hasDiscount && <span className="badge discount">-{discountPercent}%</span>}
        {product.isNew && <span className="badge new">New</span>}
        {product.stock > 0 ? (
          <span className="badge in-stock">In Stock</span>
        ) : (
          <span className="badge out-of-stock">Out of Stock</span>
        )}
        <button className="wishlist-btn" onClick={handleWishlist} aria-label="Add to wishlist">
          <FiHeart />
        </button>
      </div>

      {/* Content */}
      <div className="product-info">
        <h4 className="product-title">{product.name}</h4>

        {/* Rating (optional) */}
        {product.rating && (
          <div className="product-rating">
            <span className="stars">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="rating-count">({product.reviewCount || 0})</span>
          </div>
        )}

        <p className="product-description">
          {product.description?.slice(0, 80)}
          {product.description?.length > 80 && "..."}
        </p>

        <div className="product-footer">
          {/* PRICE SECTION - COMMENTED OUT FOR NOW */}
          {/* <div className="price-wrapper">
            {hasDiscount ? (
              <>
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{product.originalPrice}</span>
              </>
            ) : (
              <span className="current-price">₹{product.price}</span>
            )}
          </div> */}

          <button
            className="order-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/products/${product._id}`);
            }}
            aria-label="Order now"
          >
            <FiShoppingCart />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;