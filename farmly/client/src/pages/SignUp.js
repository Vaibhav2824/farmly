import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const SignUp = () => {
  const [userType, setUserType] = useState("customer");

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Sign Up</h2>
        <div className="user-type-selector">
          <label>
            <input
              type="radio"
              name="userType"
              value="customer"
              checked={userType === "customer"}
              onChange={(e) => setUserType(e.target.value)}
            />
            Customer
          </label>
          <label>
            <input
              type="radio"
              name="userType"
              value="farmer"
              checked={userType === "farmer"}
              onChange={(e) => setUserType(e.target.value)}
            />
            Farmer
          </label>
        </div>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          {userType === "farmer" && (
            <>
              <input type="text" placeholder="Farm Name" required />
              <input type="text" placeholder="Farm Location" required />
            </>
          )}
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp; 