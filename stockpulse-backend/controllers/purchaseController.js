// src/controllers/purchaseController.js
const Purchase = require('../models/Purchase');

// Get all purchases
const getAllPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find();
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching purchases', error });
  }
};

// Create a new purchase
const createPurchase = async (req, res) => {
  try {
    const newPurchase = new Purchase(req.body);
    const savedPurchase = await newPurchase.save();
    res.status(201).json(savedPurchase);
  } catch (error) {
    res.status(400).json({ message: 'Error creating purchase', error });
  }
};

// Update a purchase
const updatePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPurchase = await Purchase.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPurchase);
  } catch (error) {
    res.status(400).json({ message: 'Error updating purchase', error });
  }
};

// Delete a purchase
const deletePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    await Purchase.findByIdAndDelete(id);
    res.json({ message: 'Purchase deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting purchase', error });
  }
};

module.exports = {
  getAllPurchases,
  createPurchase,
  updatePurchase,
  deletePurchase
};
