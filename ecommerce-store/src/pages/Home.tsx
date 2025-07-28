import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Welcome to the E-Commerce Store</h1>
      <p>Discover amazing products and deals!</p>
      <Link
        to="/products"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          padding: "1rem 2rem",
          background: "#222",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.2rem",
        }}
      >
        Shop Now
      </Link>
    </div>
  );
};

export default Home;
