import React from "react";
import { useNavigate } from "react-router-dom";
import "./VendorOnboarding.css";


const VendorOnboarding = () => {
  const navigate = useNavigate();
  const handleContinueShopping = () => {
    navigate('/Login');
  };
  return (
    <div className="vendor-container">
      <div className="vendor-hero-section">
        <div className="vendor-hero-content">
          <h1>Join Our Network</h1>
          <p className="tagline">Partner with Farmly to Grow Your Business</p>
        </div>
      </div>

      {/* Onboarding Process */}
      <section className="process-section">
        <h2>Vendor Onboarding Process</h2>
        <div className="process-steps">
          <div className="step">
            <h3>1. Register</h3>
            <p>Fill out the registration form with your farm details and contact information.</p>
          </div>
          <div className="step">
            <h3>2. Verification</h3>
            <p>
              Our team will review your submission, verify your farm practices, and ensure quality standards are met.
            </p>
          </div>
          <div className="step">
            <h3>3. Approval</h3>
            <p>Once approved, you’ll receive login credentials to access our vendor dashboard.</p>
          </div>
          <div className="step">
            <h3>4. Start Selling</h3>
            <p>
              List your products, track orders, and reach customers across our platform to grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Vendor Benefits */}
      <section className="benefits-section">
        <h2>Why Partner with Farmly?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <img src="https://media.istockphoto.com/id/1328137289/vector/3d-isometric-flat-vector-conceptual-illustration-of-customer-segmentation.jpg?s=612x612&w=0&k=20&c=d8CK1oEgMOVSPR2JAk3j8Vd_NpEgBBXRkZoWIG1RZcQ=" alt="Wide Reach" />
            <h3>Wide Customer Reach</h3>
            <p>Expand your business by connecting with thousands of customers looking for fresh, local produce.</p>
          </div>
          <div className="benefit">
            <img src="https://mindy-support.com/wp-content/uploads/2020/09/stock-photo-smart-agriculture-farm-precision-farming-concept-nir-images-application-screen-used-to-create-657671638.png" alt="Support" />
            <h3>Dedicated Support</h3>
            <p>
              Our team provides continuous support to help you succeed, from onboarding to scaling your business.
            </p>
          </div>
          <div className="benefit">
            <img src="https://www.shutterstock.com/image-photo/money-bag-wooden-blocks-word-260nw-1293789484.jpg" alt="Fair Pricing" />
            <h3>Fair Pricing</h3>
            <p>Enjoy transparent pricing and fair trade practices that ensure you get the value you deserve.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Start Your Journey with Farmly</h2>
        <p>
          Ready to become a partner? Fill out our onboarding form and join a network of passionate and successful
          farmers.
        </p>
        <button className="cta-btn" onClick={handleContinueShopping}>Register Now</button>
      </section>
      
     

      {/* Footer */}
      <footer className="vendor-footer">
        <p>© 2024 Farmly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default VendorOnboarding;
