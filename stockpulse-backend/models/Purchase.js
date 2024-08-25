// src/models/Purchase.js
const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  orderID: { type: String, required: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  paymentLinkOrShop: { type: String, required: true },
  cost: { type: Number, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['Unpaid', 'Paid'], required: true }
}, {
  timestamps: true
});

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;
