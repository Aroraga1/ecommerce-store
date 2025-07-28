import { products, Product } from "../data/products";
import ProductList from "../components/ProductList";
import { useCart } from "../contexts/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    // Show a brief success message (you could enhance this with a toast notification)
    console.log(`Added ${product.name} to cart!`);
  };

  return (
    <div style={{ 
      padding: "2rem",
      minHeight: "calc(100vh - 80px)",
      background: "#f8f9fa"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ 
          textAlign: "center", 
          marginBottom: "2rem",
          fontSize: "2.5rem",
          color: "#333",
          fontWeight: "300"
        }}>
          Our Products
        </h2>
        <p style={{
          textAlign: "center",
          marginBottom: "3rem",
          color: "#666",
          fontSize: "1.1rem"
        }}>
          Discover our carefully curated collection of premium products
        </p>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default Products;