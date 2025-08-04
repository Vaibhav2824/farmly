import React from "react";
import "./Vegetables.css";

const vegetablesData = [
  {
    id: 1,
    name: "Organic Spinach",
    price: "$2.99/bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    description: "Fresh, nutrient-rich organic spinach leaves",
    category: "Organic",
    origin: "Local Farms"
  },
  {
    id: 2,
    name: "Cherry Tomatoes",
    price: "$3.99/pint",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
    description: "Sweet and juicy cherry tomatoes",
    category: "Premium",
    origin: "Greenhouse Grown"
  },
  {
    id: 3,
    name: "Bell Peppers",
    price: "$1.49/each",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83",
    description: "Colorful, crisp bell peppers",
    category: "Regular",
    origin: "Mexico"
  },
  {
    id: 4,
    name: "Broccoli",
    price: "$2.99/head",
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c",
    description: "Fresh, crisp organic broccoli",
    category: "Organic",
    origin: "California"
  },
  {
    id: 5,
    name: "Baby Carrots",
    price: "$1.99/lb",
    image: "https://images.unsplash.com/photo-1582515073490-39981397c445",
    description: "Sweet and crunchy baby carrots",
    category: "Regular",
    origin: "Local Farms"
  },
  {
    id: 6,
    name: "Asparagus",
    price: "$4.99/bunch",
    image: "https://images.unsplash.com/photo-1515471209610-dae1c92d8777",
    description: "Tender premium asparagus spears",
    category: "Premium",
    origin: "Peru"
  },
  {
    id: 7,
    name: "Brussels Sprouts",
    price: "$3.49/lb",
    image: "https://images.unsplash.com/photo-1438118907704-7718ee9a191a",
    description: "Fresh, organic brussels sprouts",
    category: "Organic",
    origin: "Local Farms"
  },
  {
    id: 8,
    name: "Sweet Potato",
    price: "$1.29/lb",
    image: "https://www.chowhound.com/img/gallery/american-vs-japanese-sweet-potatoes-whats-the-difference/intro-1724941351.jpg",
    description: "Nutritious sweet potatoes",
    category: "Regular",
    origin: "USA"
  },
  {
    id: 9,
    name: "Cauliflower",
    price: "$3.99/head",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3",
    description: "Fresh, white cauliflower heads",
    category: "Premium",
    origin: "Local Farms"
  },
  {
    id: 10,
    name: "Kale",
    price: "$2.99/bunch",
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57",
    description: "Organic curly kale",
    category: "Organic",
    origin: "Local Farms"
  },
  {
    id: 11,
    name: "Zucchini",
    price: "$1.99/lb",
    image: "https://images.unsplash.com/photo-1583687355032-89b902b7335f",
    description: "Fresh, green zucchini",
    category: "Regular",
    origin: "Local Farms"
  },
  {
    id: 12,
    name: "Mushrooms",
    price: "$4.99/lb",
    image: "https://images.unsplash.com/photo-1504545102780-26774c1bb073",
    description: "Premium assorted mushrooms",
    category: "Premium",
    origin: "Specialty Farms"
  }
];

const Vegetables = () => {
  const handleAddToCart = async (vegetable) => {
    const priceNumber = parseFloat(vegetable.price.replace(/[^0-9.]/g, ''));
    
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: vegetable.id.toString(),
          productName: vegetable.name,
          quantity: 1,
          price: priceNumber,
          userId: 'user123'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      alert(`${vegetable.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  return (
    <div className="vegetables-container">
      <div className="vegetables-hero-section">
        <div className="vegetables-hero-content">
          <h1>Fresh Vegetables</h1>
          <p className="tagline">Farm-Fresh Vegetables for Your Healthy Lifestyle</p>
        </div>
      </div>

      <section className="vegetables-section">
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

        <div className="vegetables-grid">
          {vegetablesData.map((vegetable) => (
            <div key={vegetable.id} className="vegetable-card">
              <div className="vegetable-image">
                <img 
                  src={vegetable.image} 
                  alt={vegetable.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300';
                  }}
                />
                <span className="category-tag">{vegetable.category}</span>
              </div>
              <div className="vegetable-info">
                <h3>{vegetable.name}</h3>
                <p className="origin">Origin: {vegetable.origin}</p>
                <p className="description">{vegetable.description}</p>
                <div className="price-cart">
                  <span className="price">{vegetable.price}</span>
                  <button 
                    className="add-to-cart"
                    onClick={() => handleAddToCart(vegetable)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vegetables;
