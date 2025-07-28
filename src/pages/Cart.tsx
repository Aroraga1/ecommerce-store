import { useCart } from "../contexts/CartContext";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ 
      padding: "2rem", 
      maxWidth: 800, 
      margin: "0 auto",
      minHeight: "calc(100vh - 80px)",
      background: "#f8f9fa"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 12,
        padding: "2rem",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ 
          marginBottom: "2rem",
          fontSize: "2.5rem",
          color: "#333",
          textAlign: "center",
          fontWeight: "300"
        }}>
          🛒 Your Shopping Cart
        </h2>
        
        {cart.length === 0 ? (
          <div style={{ 
            textAlign: "center", 
            padding: "3rem",
            color: "#666"
          }}>
            <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🛒</div>
            <h3 style={{ marginBottom: "1rem", color: "#999" }}>Your cart is empty</h3>
            <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/products"
              style={{
                display: "inline-block",
                padding: "1rem 2rem",
                background: "#2c5aa0",
                color: "#fff",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "background-color 0.2s"
              }}
            >
              🛍️ Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: "2rem" }}>
              <p style={{ 
                textAlign: "center", 
                fontSize: "1.1rem", 
                color: "#666",
                margin: "0 0 1.5rem 0"
              }}>
                {itemCount} item{itemCount !== 1 ? 's' : ''} in your cart
              </p>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  onUpdateQuantity={updateQuantity}
                />
              ))}
            </div>
            
            <div style={{ 
              borderTop: "2px solid #eee", 
              paddingTop: "2rem",
              background: "#f8f9fa",
              borderRadius: 12,
              padding: "2rem",
              marginTop: "2rem"
            }}>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                marginBottom: "2rem"
              }}>
                <h3 style={{ 
                  fontSize: "2rem", 
                  margin: 0,
                  color: "#333"
                }}>
                  Total: <span style={{ color: "#2c5aa0" }}>${total.toFixed(2)}</span>
                </h3>
                <div style={{ fontSize: "1rem", color: "#666" }}>
                  {itemCount} item{itemCount !== 1 ? 's' : ''}
                </div>
              </div>
              
              <div style={{ 
                display: "flex", 
                gap: "1rem", 
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
                <button
                  onClick={clearCart}
                  style={{
                    background: "#ff4757",
                    color: "#fff",
                    border: "none",
                    borderRadius: 8,
                    padding: "1rem 2rem",
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: "600",
                    transition: "background-color 0.2s"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff3742";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#ff4757";
                  }}
                >
                  🗑️ Clear Cart
                </button>
                
                <Link
                  to="/products"
                  style={{
                    background: "#6c757d",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "1rem 2rem",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "background-color 0.2s"
                  }}
                >
                  ← Continue Shopping
                </Link>
                
                <Link
                  to="/checkout"
                  style={{
                    background: "#28a745",
                    color: "#fff",
                    borderRadius: 8,
                    padding: "1rem 2rem",
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "1rem",
                    transition: "background-color 0.2s"
                  }}
                >
                  💳 Proceed to Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;