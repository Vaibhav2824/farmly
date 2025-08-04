import React from "react";
import { Link } from "react-router-dom";
import "./ProductCategories.css";

const categories = [
  { id: "fruits", name: "Fruits", image: "https://www.mooringspark.org/hubfs/bigstock-Fresh-Fruits-assorted-Fruits-C-365480089.jpg", description: "Fresh, juicy, and ripe fruits sourced daily." },
  { id: "vegetables", name: "Vegetables", image: "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2021/08/farmers-market-produce-0812211.jpg", description: "Farm-fresh vegetables for a healthy lifestyle." },
  { id: "dairy", name: "Dairy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUovqC7FkLgtVoa9JAZ7BNoTwClclPn2YAJw&s", description: "Premium dairy products straight from trusted farms." },
  { id: "spices", name: "Spices", image: "https://zofffoods.com/cdn/shop/articles/gourmet-chocolate-dessert-wooden-table-decorated-with-spices-generated-by-ai.jpg?v=1695376740", description: "High-quality spices to elevate your cooking." },
  { id: "grains", name: "Grains", image: "https://hips.hearstapps.com/hmg-prod/images/gettyimages-611609590-6627de2d8c0bb.jpg", description: "Nutritious grains for a balanced diet." },
  { id: "meat", name: "Meat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNreonYJX-dHG-utDMhJndbwel1UKkcgbMfQ&s", description: "Nutritious meat for a balanced and nutritious diet." },
];

const ProductCategories = () => {
  return (
    <div className="categories-container">
      <div className="categories-hero-section">
        <div className="categories-hero-content">
          <h1>Our Categories</h1>
          <p className="tagline">Fresh, Quality Products for Every Need</p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="categories-section">
        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Link to={`/categories/${category.id}`} className="explore-btn">
                Explore {category.name}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductCategories;
