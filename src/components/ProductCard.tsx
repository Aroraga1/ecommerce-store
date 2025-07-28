import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div
      className="product-card"
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: 12,
        padding: 20,
        textAlign: "center",
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: 200,
          objectFit: "cover",
          marginBottom: 16,
          borderRadius: 8,
        }}
        onError={(e) => {
          e.currentTarget.src = `https://via.placeholder.com/200x200/f0f0f0/666666?text=${encodeURIComponent(product.name)}`;
        }}
      />
      <h3 style={{ margin: "0 0 8px 0", fontSize: "1.2rem", color: "#333" }}>
        {product.name}
      </h3>
      <p style={{ color: "#666", fontSize: 14, margin: "0 0 12px 0", lineHeight: 1.4 }}>
        {product.description}
      </p>
      <p style={{ 
        fontWeight: "bold", 
        fontSize: 20, 
        margin: "0 0 16px 0",
        color: "#2c5aa0"
      }}>
        ${product.price.toFixed(2)}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        style={{
          padding: "12px 24px",
          background: "#2c5aa0",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "600",
          transition: "background-color 0.2s",
          width: "100%",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1e3d6f";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#2c5aa0";
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;