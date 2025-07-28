import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import { CartProvider } from "./contexts/CartContext";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div style={{ minHeight: "100vh", background: "#f8f9fa" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
