import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = total * 0.08; // 8% tax
  const shipping = total > 50 ? 0 : 9.99;
  const finalTotal = total + tax + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate("/success");
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div style={{ 
        padding: "2rem", 
        textAlign: "center",
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div>
          <h2>Your cart is empty</h2>
          <p>Add some items to your cart before checking out.</p>
          <a href="/products" style={{
            display: "inline-block",
            padding: "1rem 2rem",
            background: "#2c5aa0",
            color: "#fff",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: "600"
          }}>
            Shop Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: "2rem",
      maxWidth: 1000,
      margin: "0 auto",
      minHeight: "calc(100vh - 80px)",
      background: "#f8f9fa"
    }}>
      <h2 style={{ 
        textAlign: "center", 
        marginBottom: "2rem",
        fontSize: "2.5rem",
        color: "#333",
        fontWeight: "300"
      }}>
        💳 Checkout
      </h2>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "1fr 400px", 
        gap: "2rem",
        alignItems: "start"
      }}>
        {/* Checkout Form */}
        <div style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: 12,
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>Contact Information</h3>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 8,
                  border: "2px solid #e0e0e0",
                  fontSize: "1rem",
                  marginBottom: "1rem"
                }}
              />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>Shipping Address</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: 8,
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem"
                  }}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: 8,
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem"
                  }}
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 8,
                  border: "2px solid #e0e0e0",
                  fontSize: "1rem",
                  marginBottom: "1rem"
                }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: "1rem" }}>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: 8,
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem"
                  }}
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: 8,
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem"
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ marginBottom: "1rem", color: "#333" }}>Payment Information</h3>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card number"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 8,
                  border: "2px solid #e0e0e0",
                  fontSize: "1rem",
                  marginBottom: "1rem"
                }}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 120px", gap: "1rem" }}>
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: 8,
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem"
                  }}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  style={{
                    padding: "12px",
                    borderRadius: 8,
                    border: "2px solid #e0e0e0",
                    fontSize: "1rem"
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              style={{
                width: "100%",
                padding: "1rem",
                background: isProcessing ? "#ccc" : "#28a745",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: "1.2rem",
                fontWeight: "600",
                cursor: isProcessing ? "not-allowed" : "pointer",
                transition: "background-color 0.2s"
              }}
            >
              {isProcessing ? "Processing..." : `Complete Order - $${finalTotal.toFixed(2)}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: 12,
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
          position: "sticky",
          top: "2rem"
        }}>
          <h3 style={{ marginBottom: "1.5rem", color: "#333" }}>Order Summary</h3>
          
          <div style={{ marginBottom: "1.5rem" }}>
            {cart.map((item) => (
              <div key={item.id} style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                marginBottom: "1rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid #eee"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{ width: 40, height: 40, objectFit: "cover", borderRadius: 6 }}
                  />
                  <div>
                    <div style={{ fontWeight: "500", fontSize: "0.9rem" }}>{item.name}</div>
                    <div style={{ color: "#666", fontSize: "0.8rem" }}>Qty: {item.quantity}</div>
                  </div>
                </div>
                <div style={{ fontWeight: "600" }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "2px solid #eee", paddingTop: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
              <span>Tax:</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
              <span>Shipping:</span>
              <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              fontSize: "1.2rem", 
              fontWeight: "bold",
              borderTop: "2px solid #eee",
              paddingTop: "1rem"
            }}>
              <span>Total:</span>
              <span style={{ color: "#2c5aa0" }}>${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;