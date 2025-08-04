import React from "react";
import "./Spices.css";

const spicesData = [
  {
    id: 1,
    name: "Organic Turmeric",
    price: "$4.99/oz",
    image: "https://freshindiaorganics.com/cdn/shop/products/WhatsAppImage2023-02-25at4.54.46PM_1.jpg?v=1677487596",
    description: "Premium ground turmeric with rich color and flavor",
    category: "Organic",
    origin: "India"
  },
  {
    id: 2,
    name: "Cinnamon Sticks",
    price: "$3.99/oz",
    image: "https://images-cdn.ubuy.co.in/654af88ba5bcde118435e911-cinnamon-sticks.jpg",
    description: "Premium Ceylon cinnamon sticks",
    category: "Premium",
    origin: "Sri Lanka"
  },
  {
    id: 3,
    name: "Black Peppercorns",
    price: "$2.99/oz",
    image: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F551f18bc-dccc-4b31-a028-8414ec4674ac_1056x704.jpeg",
    description: "Whole black peppercorns for fresh grinding",
    category: "Organic",
    origin: "India"
  },
  {
    id: 4,
    name: "Cardamom Pods",
    price: "$6.99/oz",
    image: "https://cdn11.bigcommerce.com/s-ull9qh3m1o/images/stencil/1280x1280/products/1264/199779/CA002__64089.1618353642.jpg?c=2",
    description: "Aromatic green cardamom pods",
    category: "Premium",
    origin: "Guatemala"
  },
  {
    id: 5,
    name: "Organic Ginger",
    price: "$3.49/oz",
    image: "https://www.agrifarming.in/wp-content/uploads/Ultimate-Guide-to-Organic-Ginger-Farming2.jpg",
    description: "Ground organic ginger root",
    category: "Organic",
    origin: "China"
  },
  {
    id: 6,
    name: "Saffron Threads",
    price: "$15.99/gram",
    image: "https://d3awvtnmmsvyot.cloudfront.net/api/file/nTg3nhoqSJeXpD272TlD/convert?fit=max&w=570&cache=true",
    description: "Premium grade pure saffron threads",
    category: "Premium",
    origin: "Spain"
  },
  {
    id: 7,
    name: "Cumin Seeds",
    price: "$2.49/oz",
    image: "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/organic-shahjeera-250-gm-shahi-jeera-shah-jeera-caraway-seeds-black-cumin-seeds-coorg-spices.20220909012057.webp",
    description: "Whole cumin seeds for authentic flavor",
    category: "Regular",
    origin: "Iran"
  },
  {
    id: 8,
    name: "Star Anise",
    price: "$4.49/oz",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbLoJ4diMwXe_F8Crgm_SmSU7eqpTKc1LU-g&s",
    description: "Whole star anise pods",
    category: "Premium",
    origin: "China"
  },
  {
    id: 9,
    name: "Organic Paprika",
    price: "$3.99/oz",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwH-ZuB2KldPMkDrQvhVl8gCroeo9-3vqw9g&s",
    description: "Sweet Hungarian paprika powder",
    category: "Organic",
    origin: "Hungary"
  },
  {
    id: 10,
    name: "Bay Leaves",
    price: "$2.99/oz",
    image: "https://blog.hkvitals.com/wp-content/uploads/2023/11/900-7.jpg",
    description: "Dried whole bay leaves",
    category: "Regular",
    origin: "Turkey"
  },
  {
    id: 11,
    name: "Cloves",
    price: "$5.99/oz",
    image: "https://tildaricelive.s3.eu-central-1.amazonaws.com/wp-content/uploads/sites/21/2022/01/26110132/clove-1-min.png",
    description: "Whole cloves with intense aroma",
    category: "Premium",
    origin: "Indonesia"
  },
  {
    id: 12,
    name: "Organic Nutmeg",
    price: "$4.99/oz",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/2/PK/FK/FR/103870422/organic-nutmeg.jpeg",
    description: "Whole organic nutmeg",
    category: "Organic",
    origin: "Grenada"
  }
];

const Spices = () => {
  return (
    <div className="spices-container">
      <div className="spices-hero-section">
        <div className="spices-hero-content">
          <h1>Premium Spices</h1>
          <p className="tagline">Elevate Your Cooking with Fine Spices</p>
        </div>
      </div>

      <section className="spices-section">
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

        <div className="spices-grid">
          {spicesData.map((spice) => (
            <div key={spice.id} className="spice-card">
              <div className="spice-image">
                <img 
                  src={spice.image} 
                  alt={spice.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300';
                  }}
                />
                <span className="category-tag">{spice.category}</span>
              </div>
              <div className="spice-info">
                <h3>{spice.name}</h3>
                <p className="origin">Origin: {spice.origin}</p>
                <p className="description">{spice.description}</p>
                <div className="price-cart">
                  <span className="price">{spice.price}</span>
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

export default Spices;
