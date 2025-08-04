import React from "react";
import "./Grains.css";

const grainsData = [
  {
    id: 1,
    name: "Organic Quinoa",
    price: "$5.99/lb",
    image: "https://5.imimg.com/data5/NV/PL/MY-31100915/organic-quinoa-seeds.jpg",
    description: "Premium organic quinoa, rich in protein and nutrients",
    category: "Organic",
    origin: "Peru"
  },
  {
    id: 2,
    name: "Basmati Rice",
    price: "$3.99/lb",
    image: "https://www.isayorganic.com/cdn/shop/files/BrownRice_1024x1024@2x.jpg?v=1715180416",
    description: "Aromatic long-grain basmati rice",
    category: "Premium",
    origin: "India"
  },
  {
    id: 3,
    name: "Steel Cut Oats",
    price: "$2.99/lb",
    image: "https://post.healthline.com/wp-content/uploads/2020/05/steel-cut-oats-oatmeal-1296x728-header.jpg",
    description: "Hearty and nutritious steel cut oats",
    category: "Regular",
    origin: "Local Farms"
  },
  {
    id: 4,
    name: "Brown Rice",
    price: "$2.49/lb",
    image: "https://images.onlymyhealth.com/imported/images/2024/June/26_Jun_2024/mn-brown-rice.jpg",
    description: "Whole grain brown rice, rich in fiber",
    category: "Organic",
    origin: "USA"
  },
  {
    id: 5,
    name: "Pearl Barley",
    price: "$1.99/lb",
    image: "https://nuttyyogi.com/cdn/shop/products/Pearl_Barley_One.jpg?v=1606373480",
    description: "Versatile pearl barley for soups and sides",
    category: "Regular",
    origin: "Canada"
  },
  {
    id: 6,
    name: "Red Quinoa",
    price: "$6.99/lb",
    image: "https://5.imimg.com/data5/JL/MX/SN/SELLER-51967572/red-quinoa-500x500.jpg",
    description: "Nutty and colorful red quinoa",
    category: "Premium",
    origin: "Bolivia"
  },
  {
    id: 7,
    name: "Wild Rice",
    price: "$8.99/lb",
    image: "https://theviewfromgreatisland.com/wp-content/uploads/2020/11/wild-rice-salad-8505242-November-02-2020.jpg",
    description: "Premium wild rice blend",
    category: "Premium",
    origin: "Minnesota"
  },
  {
    id: 8,
    name: "Millet",
    price: "$3.49/lb",
    image: "https://cdn.britannica.com/48/156548-050-7F7B684C/Millet-grains-harvest.jpg",
    description: "Ancient grain millet, gluten-free",
    category: "Organic",
    origin: "India"
  },
  {
    id: 9,
    name: "Jasmine Rice",
    price: "$4.49/lb",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/08/2014_uncooked_Thai_jasmine_rice.jpg",
    description: "Fragrant Thai jasmine rice",
    category: "Premium",
    origin: "Thailand"
  },
  {
    id: 10,
    name: "Buckwheat",
    price: "$4.99/lb",
    image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325042/dried-buckwheat-grains-on-a-wooden-spoon.jpg",
    description: "Gluten-free buckwheat groats",
    category: "Organic",
    origin: "Russia"
  },
  {
    id: 11,
    name: "Amaranth",
    price: "$5.49/lb",
    image: "https://goodness-farm.com/wp-content/uploads/2024/10/31052022-Amaranth-seeds-may-help-cardiovascular-health-and-diabetes.jpg",
    description: "Ancient grain amaranth, high in protein",
    category: "Premium",
    origin: "Mexico"
  },
  {
    id: 12,
    name: "Sorghum",
    price: "$3.99/lb",
    image: "https://evolution.earthathome.org/wp-content/uploads/2023/02/Sorghum-grain-ElCampo-Texas-LanceCheung-2000px.jpg",
    description: "Nutritious and versatile sorghum grain",
    category: "Regular",
    origin: "Africa"
  }
];

const Grains = () => {
  return (
    <div className="grains-container">
      <div className="grains-hero-section">
        <div className="grains-hero-content">
          <h1>Premium Grains</h1>
          <p className="tagline">Nourishing Grains for Healthy Living</p>
        </div>
      </div>

      <section className="grains-section">
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

        <div className="grains-grid">
          {grainsData.map((grain) => (
            <div key={grain.id} className="grain-card">
              <div className="grain-image">
                <img 
                  src={grain.image} 
                  alt={grain.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300';
                  }}
                />
                <span className="category-tag">{grain.category}</span>
              </div>
              <div className="grain-info">
                <h3>{grain.name}</h3>
                <p className="origin">Origin: {grain.origin}</p>
                <p className="description">{grain.description}</p>
                <div className="price-cart">
                  <span className="price">{grain.price}</span>
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

export default Grains;
