import React from "react";
import "./Sustainability.css";
import sustainabilityImage from './sustainability.png';

const Sustainability = () => {
  return (
    <div className="sustainability-container">
      <div className="sustainability-hero-section">
        <div className="sustainability-hero-content">
          <h1>Sustainability at Farmly</h1>
          <p className="tagline">Creating a Better Future for Our Planet</p>
        </div>
      </div>

      {/* Our Initiatives */}
      <section className="initiatives-section">
        <h2>Our Sustainability Initiatives</h2>
        <div className="initiatives-grid">
          <div className="initiative-card">
            <img src="https://richterproduce.com/wp-content/uploads/2016/03/strawberry-greenhouse-300x202.jpg" alt="Eco-Friendly Farming" />
            <h3>Eco-Friendly Farming</h3>
            <p>
              Partnering with farms that use sustainable methods, such as crop rotation and organic fertilization, to
              reduce environmental impact.
            </p>
          </div>
          <div className="initiative-card">
            <img src="https://www.homebiogas.com/wp-content/uploads/2023/09/shutterstock_2057386766.jpg" alt="Waste Reduction" />
            <h3>Waste Reduction</h3>
            <p>
              Minimizing food and packaging waste through optimized supply chains and recyclable materials.
            </p>
          </div>
          <div className="initiative-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmy6qvoCvi1TspzWWKYDOdacaAZydDSLsV9w&s" alt="Renewable Energy" />
            <h3>Renewable Energy</h3>
            <p>
              Supporting farms that use solar, wind, and other renewable energy sources to power their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="why-it-matters-section">
        <h2>Why Sustainability Matters</h2>
        <p>
          Sustainability ensures that we protect our planet for future generations. By choosing sustainable practices,
          we:
        </p>
        <ul>
          <li>Conserve natural resources like water and soil.</li>
          <li>Reduce greenhouse gas emissions and combat climate change.</li>
          <li>Promote biodiversity and healthier ecosystems.</li>
          <li>Empower local communities and ensure fair trade.</li>
        </ul>
      </section>

      {/* How You Can Help */}
      <section className="how-you-can-help-section">
        <h2>How You Can Help</h2>
        <p>
          Join us in creating a sustainable future. Here are a few ways you can contribute:
        </p>
        <ul>
          <li>Choose sustainably sourced products whenever possible.</li>
          <li>Support local farmers and small businesses.</li>
          <li>Reduce food waste by planning meals and composting scraps.</li>
          <li>Recycle packaging and minimize single-use plastics.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="sustainability-footer">
        <p>© 2024 Farmly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Sustainability;
