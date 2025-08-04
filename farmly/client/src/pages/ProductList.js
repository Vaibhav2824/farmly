import React from "react";
import "./ProductList.css";

const products = [
  { id: 1, name: "Organic Apples", price: 2.99, image: "/assets/apples.jpg" },
  { id: 2, name: "Carrots", price: 1.49, image: "/assets/carrots.jpg" },
  { id: 3, name: "Dairy Milk", price: 3.99, image: "/assets/dairy.jpg" },
  { id: 4, name: "Whole Grain Bread", price: 4.5, image: "/assets/bread.jpg" },
  { id: 5, name: "Fresh Spinach", price: 1.99, image: "/assets/spinach.jpg" },
];

const ProductList = () => {
  return (
    <div className="product-list-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Our Products</h1>
          <p>
            Explore our wide range of fresh, high-quality products. From organic fruits to dairy and vegetables, we
            have everything you need for a healthy lifestyle.
          </p>
        </div>
      </section>

      {/* Sorting and Filters */}
      <section className="filters-section">
        <div className="filter-sidebar">
          <h3>Filter by Category</h3>
          <ul>
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Dairy</li>
            <li>Bread</li>
            <li>Others</li>
          </ul>
        </div>
        <div className="sorting-bar">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort">
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </section>

      {/* Product Grid */}
      <section className="products-section">
        <h2>Available Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="product-list-footer">
        <p>© 2024 Farmly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ProductList;
