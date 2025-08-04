import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ProductCategories from "./pages/ProductCategories";
import Fruits from "./pages/Fruits";
import Vegetables from "./pages/Vegetables";
import Dairy from "./pages/Dairy";
import Spices from "./pages/Spices";
import Grains from "./pages/Grains";
import Meat from "./pages/Meat";
import Sustainability from "./pages/Sustainability";
import VendorOnboarding from "./pages/VendorOnboarding";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";  
import MyAccount from "./pages/MyAccount";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/categories" element={<ProductCategories />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/vendor-onboarding" element={<VendorOnboarding />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Category-Specific Pages */}
        <Route path="/categories/fruits" element={<Fruits />} />
        <Route path="/categories/vegetables" element={<Vegetables />} />
        <Route path="/categories/dairy" element={<Dairy />} />
        <Route path="/categories/spices" element={<Spices />} />
        <Route path="/categories/grains" element={<Grains />} />
        <Route path="/categories/meat" element={<Meat />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
