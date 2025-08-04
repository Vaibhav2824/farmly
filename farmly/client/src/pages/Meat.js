import React from "react";
import "./Meat.css";

const meatData = [
  {
    id: 1,
    name: "Organic Chicken Breast",
    price: "$6.99/lb",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
    description: "Fresh, organic boneless chicken breast",
    category: "Organic",
    origin: "Local Farms"
  },
  {
    id: 2,
    name: "Premium Ribeye Steak",
    price: "$18.99/lb",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a",
    description: "Prime grade, well-marbled ribeye steak",
    category: "Premium",
    origin: "Nebraska"
  },
  {
    id: 3,
    name: "Ground Turkey",
    price: "$4.99/lb",
    image: "https://savaskitchen.com/wp-content/uploads/2024/02/air-fryer-ground-turkey-serving.jpg",
    description: "Lean ground turkey meat",
    category: "Regular",
    origin: "USA"
  },
  {
    id: 4,
    name: "Organic Ground Beef",
    price: "$7.99/lb",
    image: "https://cdn.sanity.io/images/ec9j7ju7/production/6ec044dc2fa3c43ff6942a691d3cfb7f33c6d46b-800x533.jpg",
    description: "Organic grass-fed ground beef",
    category: "Organic",
    origin: "Montana"
  },
  {
    id: 5,
    name: "Pork Chops",
    price: "$5.99/lb",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697",
    description: "Center-cut pork chops",
    category: "Regular",
    origin: "Iowa"
  },
  {
    id: 6,
    name: "Lamb Chops",
    price: "$16.99/lb",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26zGIAH7eSwPRd-E0Mncg9qFByqBpsaVvdA&s",
    description: "Premium New Zealand lamb chops",
    category: "Premium",
    origin: "New Zealand"
  },
  {
    id: 7,
    name: "Filet Mignon",
    price: "$24.99/lb",
    image: "https://images.unsplash.com/photo-1607116176195-b81b1f41f536",
    description: "Premium center-cut tenderloin",
    category: "Premium",
    origin: "Texas"
  },
  {
    id: 8,
    name: "Organic Turkey Breast",
    price: "$8.99/lb",
    image: "https://s3.amazonaws.com/grazecart/orangeslice/images/1659041638_62e2f766b2675.jpg",
    description: "Fresh organic turkey breast",
    category: "Organic",
    origin: "Minnesota"
  },
  {
    id: 9,
    name: "NY Strip Steak",
    price: "$15.99/lb",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a",
    description: "Choice grade NY strip steak",
    category: "Premium",
    origin: "Kansas"
  },
  {
    id: 10,
    name: "Organic Pork Tenderloin",
    price: "$9.99/lb",
    image: "https://images.unsplash.com/photo-1432139509613-5c4255815697",
    description: "Organic pork tenderloin",
    category: "Organic",
    origin: "Iowa"
  },
  {
    id: 11,
    name: "Wagyu Beef",
    price: "$89.99/lb",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5a",
    description: "Premium Japanese Wagyu beef",
    category: "Premium",
    origin: "Japan"
  },
  {
    id: 12,
    name: "Chicken Thighs",
    price: "$3.99/lb",
    image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791",
    description: "Fresh chicken thighs with skin",
    category: "Regular",
    origin: "USA"
  }
];

const Meat = () => {
  return (
    <div className="meat-container">
      <div className="meat-hero-section">
        <div className="meat-hero-content">
          <h1>Premium Meats</h1>
          <p className="tagline">Quality Cuts for Your Table</p>
        </div>
      </div>

      <section className="meat-section">
        <div className="filters">
          <select className="filter-select">
            <option value="">All Categories</option>
            <option value="organic">Organic</option>
            <option value="regular">Regular</option>
            <option value="premium">Premium</option>
          </select>
          <select className="filter-select">
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div className="meat-grid">
          {meatData.map((meat) => (
            <div key={meat.id} className="meat-card">
              <div className="meat-image">
                <img 
                  src={meat.image} 
                  alt={meat.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300';
                  }}
                />
                <span className="category-tag">{meat.category}</span>
              </div>
              <div className="meat-info">
                <h3>{meat.name}</h3>
                <p className="origin">Origin: {meat.origin}</p>
                <p className="description">{meat.description}</p>
                <div className="price-cart">
                  <span className="price">{meat.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Meat; 