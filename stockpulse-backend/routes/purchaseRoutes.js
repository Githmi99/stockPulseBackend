// src/routes/purchaseRoutes.js
const express = require('express');
const router = express.Router();
const { getAllPurchases, createPurchase, updatePurchase, deletePurchase } = require('../controllers/purchaseController');

// Get all purchases
router.get('/', getAllPurchases);

// Create a new purchase
router.post('/', createPurchase);

// Update a purchase
router.put('/:id', updatePurchase);

// Delete a purchase
router.delete('/:id', deletePurchase);

module.exports = router;
