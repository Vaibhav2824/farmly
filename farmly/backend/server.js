const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/farmlyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Cart Schema
const cartSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true },
  userId: { type: String, required: true }
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

// Routes
app.get("/api/cart/:userId", async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.params.userId });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cart items", error: error.message });
  }
});

app.post("/api/cart", async (req, res) => {
  const { productId, productName, quantity, price, userId } = req.body;
  try {
    // Check if item already exists
    const existingItem = await Cart.findOne({ productId, userId });
    
    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
      return res.status(200).json(existingItem);
    }

    const newCartItem = new Cart({ productId, productName, quantity, price, userId });
    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (error) {
    res.status(500).json({ message: "Error adding item to cart", error: error.message });
  }
});

app.put("/api/cart/:itemId", async (req, res) => {
  try {
    const updatedItem = await Cart.findByIdAndUpdate(
      req.params.itemId,
      { quantity: req.body.quantity },
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating cart item", error: error.message });
  }
});

app.delete("/api/cart/:itemId", async (req, res) => {
  try {
    const deletedItem = await Cart.findByIdAndDelete(req.params.itemId);
    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.status(200).json({ message: "Item removed from cart successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error removing cart item", error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Clear entire cart for a user
app.delete("/api/cart/user/:userId", async (req, res) => {
  try {
    await Cart.deleteMany({ userId: req.params.userId });
    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error clearing cart", error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
