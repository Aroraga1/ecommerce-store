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
  const [category, setCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];

  const filtered = products.filter(
    (p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                           p.category.toLowerCase().includes(search.toLowerCase()) ||
                           p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "all" || p.category === category;
      return matchesSearch && matchesCategory;
    }
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: 32,
          background: "#fff",
          padding: "1.5rem",
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flex: 1 }}>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "12px 16px",
                minWidth: 250,
                borderRadius: 8,
                border: "2px solid #e0e0e0",
                fontSize: "1rem",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => e.target.style.borderColor = "#2c5aa0"}
              onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{
                padding: "12px 16px",
                borderRadius: 8,
                border: "2px solid #e0e0e0",
                fontSize: "1rem",
                background: "#fff",
                cursor: "pointer"
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => setView("grid")}
              style={{
                padding: "12px 20px",
                background: view === "grid" ? "#2c5aa0" : "#f0f0f0",
                color: view === "grid" ? "#fff" : "#333",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.2s"
              }}
            >
              🔲 Grid
            </button>
            <button
              onClick={() => setView("list")}
              style={{
                padding: "12px 20px",
                background: view === "list" ? "#2c5aa0" : "#f0f0f0",
                color: view === "list" ? "#fff" : "#333",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: "500",
                transition: "all 0.2s"
              }}
            >
              📋 List
            </button>
          </div>
        </div>
        
        <div style={{ 
          fontSize: "0.9rem", 
          color: "#666",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span>Showing {filtered.length} of {products.length} products</span>
          {search && <span>Search: "{search}"</span>}
          {category !== "all" && <span>Category: {category}</span>}
        </div>
      </div>

      <div
        style={{
          display: view === "grid" ? "grid" : "block",
          gridTemplateColumns:
            view === "grid"
              ? "repeat(auto-fill, minmax(280px, 1fr))"
              : undefined,
          gap: 24,
        }}
      >
        {filtered.length === 0 ? (
          <div style={{
            textAlign: "center",
            padding: "3rem",
            background: "#fff",
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
            <h3 style={{ color: "#666", marginBottom: "0.5rem" }}>No products found</h3>
            <p style={{ color: "#999" }}>Try adjusting your search or filter criteria</p>
          </div>
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