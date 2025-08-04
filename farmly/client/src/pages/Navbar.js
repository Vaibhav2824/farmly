import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">Farmly</Link>
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/sustainability">Sustainability</Link>
          <Link to="/vendor-onboarding">Vendors</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/contact-us">Contact</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/my-account">My Account</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
