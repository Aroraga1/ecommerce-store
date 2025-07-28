import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ 
      minHeight: "calc(100vh - 80px)",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textAlign: "center",
      padding: "2rem"
    }}>
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ 
          fontSize: "3.5rem", 
          marginBottom: "1rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}>
          Welcome to ShopHub
        </h1>
        <p style={{ 
          fontSize: "1.3rem", 
          marginBottom: "2rem",
          opacity: 0.9,
          lineHeight: 1.6
        }}>
          Discover amazing products at unbeatable prices. Your one-stop shop for everything you need!
        </p>
        <Link
          to="/products"
          style={{
            display: "inline-block",
            padding: "1rem 2.5rem",
            background: "rgba(255,255,255,0.2)",
            color: "#fff",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.2rem",
            border: "2px solid rgba(255,255,255,0.3)",
            transition: "all 0.3s ease",
            backdropFilter: "blur(10px)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.3)";
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255,255,255,0.2)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          🛍️ Shop Now
        </Link>
        
        <div style={{ 
          marginTop: "3rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "2rem",
          maxWidth: "500px",
          margin: "3rem auto 0"
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚚</div>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>Free Shipping</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>On orders over $50</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔒</div>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>Secure Payment</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>100% protected</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>↩️</div>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1rem" }}>Easy Returns</h3>
            <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>30-day policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;