import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>We're here to help and answer any questions you might have</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Visit Us</h3>
            <p>PES University</p>
            <p>Bangalore, India</p>
          </div>

          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>support@farmly.com</p>
            <p>sales@farmly.com</p>
          </div>

          <div className="info-card">
            <i className="fas fa-phone-alt"></i>
            <h3>Call Us</h3>
            <p>+91 9876543210</p>
            <p>Mon-Fri: 9AM-6PM</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Yo
              ur Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>Delivery Times</h3>
            <p>Our delivery times range from 24 to 48 hours, depending on your location.</p>
          </div>
          <div className="faq-item">
            <h3>Payment Methods</h3>
            <p>We accept credit/debit cards, online banking, and mobile wallets.</p>
          </div>
          <div className="faq-item">
            <h3>Return Policy</h3>
            <p>We have a hassle-free return policy for damaged or unsatisfactory products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;