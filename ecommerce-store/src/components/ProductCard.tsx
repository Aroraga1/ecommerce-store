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
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 16,
        textAlign: "center",
        background: "#fff",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: 150,
          height: 150,
          objectFit: "cover",
          marginBottom: 12,
        }}
      />
      <h3>{product.name}</h3>
      <p style={{ color: "#666", fontSize: 14 }}>{product.description}</p>
      <p style={{ fontWeight: "bold", fontSize: 18 }}>
        ${product.price.toFixed(2)}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        style={{
          padding: "0.5rem 1.5rem",
          background: "#222",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
