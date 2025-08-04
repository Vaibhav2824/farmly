import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Vaibhav Gupta",
      role: "Founder & CEO",
      
      quote: "Building sustainable food systems for future generations"
    },
    {
      name: "Tanishk Maheshwari",
      role: "Head of Operations",
      
      quote: "Connecting farms to families, one delivery at a time"
    },
    {
      name: "Srijan Jha",
      role: "Chief Sustainability Officer",
      
      quote: "Creating a greener future through sustainable farming"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-hero-section">
        <div className="about-hero-content">
          <h1>Our Story</h1>
          <p className="tagline">Bridging farms to families since 2020</p>
        </div>
      </div>

      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>To create a seamless farm-to-table experience by providing fresh, high-quality produce 
             and empowering local farmers through sustainable practices.</p>
          
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-leaf"></i>
              <h3>Sustainability</h3>
              <p>Committed to reducing environmental impact through responsible sourcing</p>
            </div>
            <div className="value-card">
              <i className="fas fa-heart"></i>
              <h3>Quality</h3>
              <p>Every product carefully selected to ensure premium freshness and taste</p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Community</h3>
              <p>Building strong relationships with farmers, vendors, and customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-content">
          <h2>Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="year">2020</div>
              <p>Started with 5 local farm partnerships</p>
            </div>
            <div className="timeline-item">
              <div className="year">2021</div>
              <p>Expanded to 50+ farmers and launched mobile app</p>
            </div>
            <div className="timeline-item">
              <div className="year">2022</div>
              <p>Introduced sustainable packaging and carbon-neutral delivery</p>
            </div>
            <div className="timeline-item">
              <div className="year">2023</div>
              <p>Reached 100,000+ happy customers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="quote">"{member.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat-card">
            <h3>1000+</h3>
            <p>Farmer Partners</p>
          </div>
          <div className="stat-card">
            <h3>50,000+</h3>
            <p>Orders Delivered</p>
          </div>
          <div className="stat-card">
            <h3>95%</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;