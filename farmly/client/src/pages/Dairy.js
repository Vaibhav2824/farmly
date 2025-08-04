import React from "react";
import "./Dairy.css";

const dairyData = [
  {
    id: 1,
    name: "Organic Whole Milk",
    price: "$4.99/gallon",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    description: "Fresh organic whole milk from grass-fed cows",
    category: "Organic",
    origin: "Local Farms"
  },
  {
    id: 2,
    name: "Aged Cheddar",
    price: "$6.99/lb",
    image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b",
    description: "Sharp aged cheddar cheese, perfect for any occasion",
    category: "Premium",
    origin: "Wisconsin"
  },
  {
    id: 3,
    name: "Greek Yogurt",
    price: "$3.99/32oz",
    image: "https://www.mygreekdish.com/wp-content/uploads/2023/08/Greek-Yogurt-recipe-How-to-make-homemade-Greek-Yogurt.jpeg",
    description: "Creamy, protein-rich Greek yogurt",
    category: "Regular",
    origin: "California"
  },
  {
    id: 4,
    name: "Organic Butter",
    price: "$5.99/lb",
    image: "https://ases.in/cdn/shop/files/shea1_460x@2x.jpg?v=1691055354",
    description: "Creamy organic butter from grass-fed cows",
    category: "Organic",
    origin: "Vermont"
  },
  {
    id: 5,
    name: "Mozzarella",
    price: "$4.49/8oz",
    image: "https://media.istockphoto.com/id/1341216531/photo/italian-buffalo-mozzarella-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=XQz0A6v068OgIbX3ms2OcBjuHNzC3WYMKi7Zv7mD7IM=",
    description: "Fresh, soft mozzarella cheese",
    category: "Regular",
    origin: "Italy"
  },
  {
    id: 6,
    name: "Artisan Brie",
    price: "$8.99/8oz",
    image: "https://thumbs.dreamstime.com/b/brie-cream-cheese-piece-artisan-70488156.jpg",
    description: "Creamy, rich artisanal brie cheese",
    category: "Premium",
    origin: "France"
  },
  {
    id: 7,
    name: "Heavy Cream",
    price: "$4.29/pint",
    image: "https://jessicainthekitchen.com/wp-content/uploads/2022/03/Vegan-Creamer-11.jpg",
    description: "Premium heavy whipping cream",
    category: "Premium",
    origin: "Local Farms"
  },
  {
    id: 8,
    name: "Organic Cottage Cheese",
    price: "$3.99/16oz",
    image: "https://www.greendna.in/cdn/shop/products/curd_fde822bd-928e-43ce-a12e-d4c06e3b80a1_540x.jpg?v=1626803363",
    description: "Fresh organic cottage cheese",
    category: "Organic",
    origin: "Wisconsin"
  },
  {
    id: 9,
    name: "Gouda Cheese",
    price: "$7.99/lb",
    image: "https://cheesemaking.com/cdn/shop/products/gouda_hero.jpg?v=1529434181&width=2048",
    description: "Aged Dutch Gouda cheese",
    category: "Premium",
    origin: "Netherlands"
  },
  {
    id: 10,
    name: "Organic Sour Cream",
    price: "$3.49/16oz",
    image: "https://img.freepik.com/premium-photo/fresh-organic-yogurt-dairy-product-horizontal-background_107173-36281.jpg",
    description: "Organic cultured sour cream",
    category: "Organic",
    origin: "California"
  },
  {
    id: 11,
    name: "Blue Cheese",
    price: "$8.99/lb",
    image: "https://chefcollectivenyc.com/cdn/shop/articles/Bluecheeses_1_2048x.jpg?v=1618596501",
    description: "Premium aged blue cheese",
    category: "Premium",
    origin: "France"
  },
  {
    id: 12,
    name: "String Cheese",
    price: "$4.99/12pk",
    image: "https://www.nutritionadvance.com/wp-content/uploads/2020/02/string-cheese-on-wooden-surface-face.jpg",
    description: "Fun and convenient string cheese sticks",
    category: "Regular",
    origin: "USA"
  }
];

const Dairy = () => {
  return (
    <div className="dairy-container">
      <div className="dairy-hero-section">
        <div className="dairy-hero-content">
          <h1>Fresh Dairy</h1>
          <p className="tagline">Farm-Fresh Dairy Products for Your Family</p>
        </div>
      </div>

      <section className="dairy-section">
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

        <div className="dairy-grid">
          {dairyData.map((dairy) => (
            <div key={dairy.id} className="dairy-card">
              <div className="dairy-image">
                <img 
                  src={dairy.image} 
                  alt={dairy.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300';
                  }}
                />
                <span className="category-tag">{dairy.category}</span>
              </div>
              <div className="dairy-info">
                <h3>{dairy.name}</h3>
                <p className="origin">Origin: {dairy.origin}</p>
                <p className="description">{dairy.description}</p>
                <div className="price-cart">
                  <span className="price">{dairy.price}</span>
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

export default Dairy;
