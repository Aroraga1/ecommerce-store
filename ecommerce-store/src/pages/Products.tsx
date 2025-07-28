import { products, Product } from "../data/products";
import ProductList from "../components/ProductList";
import { useCart } from "../contexts/CartContext";

const Products = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Products</h2>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default Products;
