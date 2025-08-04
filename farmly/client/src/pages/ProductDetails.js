import React from "react";
import "./ProductDetails.css";

const product = {
  name: "Organic Apples",
  description: "Fresh, juicy organic apples directly sourced from trusted farms. Perfect for a healthy snack or adding to your favorite recipes.",
  price: 2.99,
  image: "/assets/apples.jpg",
  features: [
    "100% organic and pesticide-free",
    "Hand-picked for maximum freshness",
    "Packed with essential nutrients",
    "Perfect for snacking or cooking",
  ],
};

const ProductDetails = () => {
  return (
    <div className="product-details-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">Price: ${product.price.toFixed(2)} per lb</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="hero-image">
          <img src={product.image} alt={product.name} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Product Features</h2>
        <ul>
          {product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Nutrition Section */}
      <section className="nutrition-section">
        <h2>Nutritional Information</h2>
        <p>
          Apples are a great source of dietary fiber, vitamins, and antioxidants. They are known to promote heart
          health and support a strong immune system.
        </p>
      </section>

      {/* Footer */}
      <footer className="product-footer">
        <p>© 2024 Farmly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ProductDetails;
