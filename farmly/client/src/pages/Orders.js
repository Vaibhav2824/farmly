import React from "react";
import "./Orders.css";

const orders = [
  {
    id: "ORD12345",
    date: "2024-11-10",
    items: [
      { name: "Organic Apples", quantity: 2, price: 5.98 },
      { name: "Fresh Carrots", quantity: 3, price: 4.47 },
    ],
    total: 10.45,
    status: "Delivered",
  },
  {
    id: "ORD12346",
    date: "2024-11-12",
    items: [
      { name: "Premium Dairy Milk", quantity: 1, price: 3.50 },
      { name: "Whole Grain Bread", quantity: 2, price: 4.00 },
    ],
    total: 7.50,
    status: "In Transit",
  },
];

const Orders = () => {
  return (
    <div className="orders-container">
      <div className="orders-hero">
        <h1>Your Orders</h1>
      </div>
      {/* Orders Section */}
      <section className="orders-section">
        <h2>Order History</h2>
        {orders.map((order) => (
          <div className="order-card" key={order.id}>
            <div className="order-header">
              <h3>Order ID: {order.id}</h3>
              <p>Date: {order.date}</p>
              <p>Status: <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>
            </div>
            <div className="order-items">
              <h4>Items:</h4>
              {order.items.map((item, index) => (
                <p key={index}>
                  {item.quantity} x {item.name} - ${item.price.toFixed(2)}
                </p>
              ))}
            </div>
            <div className="order-total">
              <h4>Total: ${order.total.toFixed(2)}</h4>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="orders-footer">
        <p>© 2024 Farmly. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Orders;
