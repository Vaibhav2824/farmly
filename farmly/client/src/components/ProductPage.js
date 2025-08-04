import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './ProductPage.css';

const ProductPage = ({ category, products }) => {
  const addToCart = async (product) => {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'));
      
      if (!userInfo) {
        toast.error('Please login to add items to cart');
        return;
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        'http://localhost:5000/api/cart',
        {
          productId: product.id,
          quantity: 1,
        },
        config
      );

      toast.success(`${product.name} added to cart!`);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error adding to cart');
    }
  };

  return (
    <div className="products-container">
      <h1>{category}</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">${product.price.toFixed(2)}/kg</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage; 