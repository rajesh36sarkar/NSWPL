import { useProducts } from "../features/products/hooks/useProducts";

const ShopPage = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Shop</h1>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ShopPage;