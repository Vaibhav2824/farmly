import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero-section">
        <div className="home-hero-content">
          <h1>Fresh From Farms, Right to Your Doorstep</h1>
          <Link to="/categories" className="cta-btn">Shop Now</Link>
        </div>
      </div>
      

      {/* Highlights Section */}
      <section className="highlights-section">
        <h2>What We Offer</h2>
        <div className="highlights-grid">
          <div className="highlight">
            <img src="https://www.shutterstock.com/shutterstock/videos/1054231361/thumb/8.jpg?ip=x480" alt="Fresh Produce" />
            <h3>Fresh Produce</h3>
            <p>Daily sourced fruits and vegetables for your family.</p>
          </div>
          <div className="highlight">
            <img src="https://richterproduce.com/wp-content/uploads/2016/03/strawberry-greenhouse-300x202.jpg" alt="Sustainability" />
            <h3>Eco-Friendly Practices</h3>
            <p>Committed to sustainable farming and reduced waste.</p>
          </div>
          <div className="highlight">
            <img src="https://i.ytimg.com/vi/Ip86RotQiPg/maxresdefault.jpg" alt="Supporting Farmers" />
            <h3>Supporting Farmers</h3>
            <p>Helping local farmers bring their products to you.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Farmly made grocery shopping so much easier and fresher!"</p>
            <h4>- Shruthi</h4>
          </div>
          <div className="testimonial">
            <p>"I love their focus on sustainability and local farming."</p>
            <h4>- Rahul</h4>
          </div>
          <div className="testimonial">
            <p>"I love their focus on customer service and quality products."</p>
            <h4>- Yash</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/about-us">About Us</a><br/>
            <a href="/categories">Categories</a><br/>
            <a href="/sustainability">Sustainability</a><br/>
            <a href="/contact-us">Contact</a>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: support@farmly.com</p>
            <p>Phone: +91 8884443331</p>
          </div>
        </div>
        <p>&#169; 2024 Farmly.Made with &#9829; </p>
      </footer>
    </div>
  );
};

export default Home;
