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
        gap: 16,
        borderBottom: "1px solid #eee",
        padding: "1rem 0",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 8 }}
      />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: 0 }}>{item.name}</h4>
        <p style={{ margin: 0, color: "#666", fontSize: 14 }}>
          {item.category}
        </p>
        <p style={{ margin: 0, fontWeight: "bold" }}>
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          style={{ padding: "0.2rem 0.7rem", marginRight: 4 }}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          style={{ padding: "0.2rem 0.7rem", marginLeft: 4 }}
        >
          +
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        style={{
          marginLeft: 16,
          background: "#ff4d4f",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
