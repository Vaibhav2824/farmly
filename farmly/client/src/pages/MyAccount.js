import React from "react";
import "./MyAccount.css";

const MyAccount = () => {
  // Replace with real user data from backend
  const user = {
    name: "Vaibhav Gupta",
    email: "vaibhavgupta@example.com",
    orders: [
      { id: "ORD12345", date: "2024-11-10", total: 45.99 },
      { id: "ORD12346", date: "2024-11-12", total: 32.75 },
    ],
  };

  return (
    <div className="account-page">
      {/* Hero Section */}
      <section className="account-hero">
        <h1>Welcome, {user.name}</h1>
        <p>Manage your account, track your orders, and update your details in one place.</p>
      </section>

      {/* Account Details */}
      <section className="account-details">
        <h2>Account Information</h2>
        <div className="details-grid">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <button className="edit-details-btn">Edit Account Details</button>
      </section>

      {/* Order History */}
      <section className="order-history">
        <h2>Order History</h2>
        {user.orders.length > 0 ? (
          <div className="orders-list">
            {user.orders.map((order) => (
              <div className="order-card" key={order.id}>
                <p>
                  <strong>Order ID:</strong> {order.id}
                </p>
                <p>
                  <strong>Date:</strong> {order.date}
                </p>
                <p>
                  <strong>Total:</strong> ${order.total.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders found.</p>
        )}
      </section>

      {/* Logout Button */}
      <section className="logout-section">
        <button className="logout-btn">Logout</button>
      </section>

      {/* Footer */}
      <footer className="account-footer">
        <p>© 2024 Farmly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default MyAccount;
