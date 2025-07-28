import { CartItem as CartItemType } from "../contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem = ({ item, onRemove, onUpdateQuantity }: CartItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        borderBottom: "1px solid #eee",
        padding: "1.5rem 0",
        background: "#fff",
        borderRadius: 12,
        marginBottom: "1rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        paddingLeft: "1rem",
        paddingRight: "1rem"
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ 
          width: 80, 
          height: 80, 
          objectFit: "cover", 
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
        onError={(e) => {
          e.currentTarget.src = `https://via.placeholder.com/80x80/f0f0f0/666666?text=${encodeURIComponent(item.name)}`;
        }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "1.2rem", color: "#333" }}>
          {item.name}
        </h4>
        <p style={{ margin: "0 0 0.5rem 0", color: "#666", fontSize: 14 }}>
          {item.category}
        </p>
        <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.1rem", color: "#2c5aa0" }}>
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "0.5rem",
        background: "#f8f9fa",
        padding: "0.5rem",
        borderRadius: 8
      }}>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          style={{ 
            padding: "0.5rem 0.8rem", 
            background: item.quantity <= 1 ? "#ccc" : "#2c5aa0",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: item.quantity <= 1 ? "not-allowed" : "pointer",
            fontSize: "1rem",
            fontWeight: "bold"
          }}
        >
          −
        </button>
        <span style={{ 
          minWidth: "2rem", 
          textAlign: "center", 
          fontSize: "1.1rem",
          fontWeight: "600"
        }}>
          {item.quantity}
        </span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          style={{ 
            padding: "0.5rem 0.8rem",
            background: "#2c5aa0",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "bold"
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        style={{
          marginLeft: 16,
          background: "#ff4757",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "0.7rem 1.2rem",
          cursor: "pointer",
          fontSize: "0.9rem",
          fontWeight: "500",
          transition: "background-color 0.2s"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#ff3742";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ff4757";
        }}
      >
        🗑️ Remove
      </button>
    </div>
  );
};

export default CartItem;