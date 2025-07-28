import { Link } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ 
      textAlign: "center", 
      padding: "3rem",
      minHeight: "calc(100vh - 80px)",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    }}>
      <div style={{ maxWidth: "600px" }}>
        <div style={{ 
          fontSize: "5rem", 
          marginBottom: "1rem",
          animation: "bounce 2s infinite"
        }}>
          ✅
        </div>
        
        <h2 style={{ 
          fontSize: "3rem", 
          marginBottom: "1rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}>
          Order Successful!
        </h2>
        
        <p style={{ 
          fontSize: "1.3rem", 
          marginBottom: "2rem",
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          Thank you for your purchase! Your order has been placed successfully and you will receive a confirmation email shortly.
        </p>

        <div style={{
          background: "rgba(255,255,255,0.1)",
          padding: "2rem",
          borderRadius: 12,
          marginBottom: "2rem",
          backdropFilter: "blur(10px)"
        }}>
          <h3 style={{ marginBottom: "1rem" }}>What's Next?</h3>
          <ul style={{ 
            listStyle: "none", 
            padding: 0, 
            textAlign: "left",
            maxWidth: "400px",
            margin: "0 auto"
          }}>
            <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "0.5rem" }}>📧</span>
              Check your email for order confirmation
            </li>
            <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "0.5rem" }}>📦</span>
              Your order will be processed within 24 hours
            </li>
            <li style={{ marginBottom: "0.5rem", display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "0.5rem" }}>🚚</span>
              Expect delivery in 3-5 business days
            </li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to="/products"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background: "rgba(255,255,255,0.2)",
              color: "#fff",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              border: "2px solid rgba(255,255,255,0.3)",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)"
            }}
          >
            🛍️ Continue Shopping
          </Link>
          
          <Link
            to="/"
            style={{
              display: "inline-block",
              padding: "1rem 2rem",
              background: "rgba(255,255,255,0.9)",
              color: "#333",
              borderRadius: 50,
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              transition: "all 0.3s ease"
            }}
          >
            🏠 Back to Home
          </Link>
        </div>
      </div>

      <style>
        {`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-30px);
            }
            60% {
              transform: translateY(-15px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Success;