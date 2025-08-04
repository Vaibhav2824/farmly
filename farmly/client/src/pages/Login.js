import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  const [userType, setUserType] = useState("customer");

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
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
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;