import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "2rem", maxWidth: 700, margin: "0 auto" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          ))}
          <div style={{ textAlign: "right", marginTop: 24 }}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button
              onClick={clearCart}
              style={{
                background: "#ff4d4f",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                padding: "0.5rem 1.5rem",
                cursor: "pointer",
                marginRight: 12,
              }}
            >
              Clear Cart
            </button>
            <a
              href="/checkout"
              style={{
                background: "#222",
                color: "#fff",
                borderRadius: 4,
                padding: "0.5rem 1.5rem",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Proceed to Checkout
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
