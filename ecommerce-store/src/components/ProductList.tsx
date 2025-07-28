import { useState } from "react";
import { Product } from "../data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList = ({ products, onAddToCart }: ProductListProps) => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: 8,
            width: 240,
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <div>
          <button
            onClick={() => setView("grid")}
            style={{
              marginRight: 8,
              background: view === "grid" ? "#222" : "#eee",
              color: view === "grid" ? "#fff" : "#222",
              border: "none",
              borderRadius: 4,
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            Grid
          </button>
          <button
            onClick={() => setView("list")}
            style={{
              background: view === "list" ? "#222" : "#eee",
              color: view === "list" ? "#fff" : "#222",
              border: "none",
              borderRadius: 4,
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
          >
            List
          </button>
        </div>
      </div>
      <div
        style={{
          display: view === "grid" ? "grid" : "block",
          gridTemplateColumns:
            view === "grid"
              ? "repeat(auto-fit, minmax(220px, 1fr))"
              : undefined,
          gap: 24,
        }}
      >
        {filtered.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filtered.map((product) => (
            <div
              key={product.id}
              style={view === "list" ? { marginBottom: 24 } : {}}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
