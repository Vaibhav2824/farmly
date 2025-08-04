import React from "react";
import "./Fruits.css";

const fruitsData = [
  {
    id: 1,
    name: "Organic Apples",
    price: " ₹220/kg",
    image: "https://hips.hearstapps.com/hmg-prod/images/apples-at-farmers-market-royalty-free-image-1627321463.jpg?crop=0.796xw:1.00xh;0.103xw,0&resize=640:*",
    description: "Fresh, crisp apples from local orchards",
    category: "Organic",
    origin: "Local Farms"
  },
  {
    id: 2,
    name: "Premium Bananas",
    price: "$1.99/lb",
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
    description: "Sweet and ripe bananas, perfect for snacking",
    category: "Regular",
    origin: "Ecuador"
  },
  {
    id: 3,
    name: "Fresh Oranges",
    price: "$3.99/lb",
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9",
    description: "Juicy citrus oranges rich in Vitamin C",
    category: "Organic",
    origin: "California"
  },
  {
    id: 4,
    name: "Red Grapes",
    price: "$4.49/lb",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f",
    description: "Sweet and seedless red grapes",
    category: "Premium",
    origin: "Italy"
  },
  {
    id: 5,
    name: "Ripe Mangoes",
    price: "$2.99/each",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078",
    description: "Sweet and juicy mangoes from premium farms",
    category: "Seasonal",
    origin: "Mexico"
  },
  {
    id: 6,
    name: "Fresh Strawberries",
    price: "$4.99/box",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
    description: "Hand-picked fresh strawberries",
    category: "Organic",
    origin: "Local Farms"
  },
  {
    id: 7,
    name: "Dragon Fruit",
    price: "$5.99/each",
    image: "https://images.unsplash.com/photo-1527325678964-54921661f888",
    description: "Exotic dragon fruit with vibrant flesh",
    category: "Exotic",
    origin: "Vietnam"
  },
  {
    id: 8,
    name: "Green Kiwi",
    price: "$0.99/each",
    image: "https://images.unsplash.com/photo-1585059895524-72359e06133a",
    description: "Nutrient-rich kiwis full of flavor",
    category: "Regular",
    origin: "New Zealand"
  },
  {
    id: 9,
    name: "Fresh Blueberries",
    price: "$5.99/box",
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e",
    description: "Antioxidant-rich organic blueberries",
    category: "Organic",
    origin: "Local Farms"
  },
  {
    id: 10,
    name: "Sweet Pineapple",
    price: "$4.99/each",
    image: "https://images.herzindagi.info/image/2023/Sep/how-to-buy-sweet-pineapple.jpg",
    description: "Tropical sweet pineapples",
    category: "Regular",
    origin: "Costa Rica"
  },
  {
    id: 11,
    name: "Fresh Peaches",
    price: "$3.49/lb",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2f0xAYRT9uJxqqCPuMUQtQtZUNQKQWjtC9g&s",
    description: "Juicy peaches from local orchards",
    category: "Seasonal",
    origin: "Local Farms"
  },
  {
    id: 12,
    name: "Pomegranate",
    price: "$3.99/each",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriI1ituAY4nZsjpI0KmvlFc7raJkDsBtxiA&s",
    description: "Antioxidant-rich fresh pomegranates",
    category: "Premium",
    origin: "Turkey"
  }
];

const Fruits = () => {
  const handleAddToCart = async (fruit) => {
    // Convert price from string (e.g., "$2.99/lb") to number
    const priceNumber = parseFloat(fruit.price.replace(/[^0-9.]/g, ''));
    
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: fruit.id.toString(),
          productName: fruit.name,
          quantity: 1,
          price: priceNumber,
          userId: 'user123' // You'll want to replace this with actual user ID later
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }

      alert(`${fruit.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  return (
    <div className="fruits-container">
      <div className="fruits-hero-section">
        <div className="fruits-hero-content">
          <h1>Fresh Fruits</h1>
          <p className="tagline">Discover our selection of fresh, hand-picked fruits sourced from local farms and trusted suppliers.</p>
        </div>
      </div>
      
      <div className="fruits-grid">
        {fruitsData.map((fruit) => (
          <div key={fruit.id} className="fruit-card">
            <img src={fruit.image} alt={fruit.name} className="fruit-image" />
            <div className="fruit-info">
              <h3>{fruit.name}</h3>
              <p className="description">{fruit.description}</p>
              <p className="origin">Origin: {fruit.origin}</p>
              <div className="price-cart">
                <span className="price">{fruit.price}</span>
                <button 
                  className="add-to-cart"
                  onClick={() => handleAddToCart(fruit)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;