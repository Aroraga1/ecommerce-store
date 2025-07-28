import { Link } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../contexts/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">E-Commerce</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li style={{ position: "relative" }}>
          <Link to="/cart">
            Cart
            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: -8,
                  right: -18,
                  background: "#ff4d4f",
                  color: "#fff",
                  borderRadius: "50%",
                  padding: "2px 8px",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                {cartCount}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
