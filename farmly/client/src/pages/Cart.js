import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cart/user123');
      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }
      const data = await response.json();
      console.log('Fetched cart items:', data);
      setCartItems(data);
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (!response.ok) throw new Error('Failed to update quantity');
      fetchCartItems();
    } catch (error) {
      console.error('Error updating quantity:', error);
      alert('Failed to update quantity');
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to remove item');
      fetchCartItems();
      alert('Item removed successfully');
    } catch (error) {
      console.error('Error removing item:', error);
      alert('Failed to remove item');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (loading) {
    return (
      <div className="cart-container">
        <div className="loading">Loading your cart...</div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <div className="empty-cart-buttons">
            <button 
              className="continue-shopping-btn"
              onClick={() => navigate('/fruits')}
            >
              Shop Fruits
            </button>
            <button 
              className="continue-shopping-btn"
              onClick={() => navigate('/vegetables')}
            >
              Shop Vegetables
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <div className="item-details">
                  <h3>{item.productName}</h3>
                  <p className="price">₹{item.price.toFixed(2)} each</p>
                </div>
                
                <div className="quantity-controls">
                  <button 
                    onClick={() => handleUpdateQuantity(item._id, Math.max(1, item.quantity - 1))}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    onClick={() => handleRemoveItem(item._id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="total">
              <h3>Total:</h3>
              <h3>₹{calculateTotal().toFixed(2)}</h3>
            </div>
            <button 
              className="checkout-btn"
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Proceed to Checkout
            </button>
            <button 
              className="continue-shopping-btn"
              onClick={() => navigate('/categories')}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;