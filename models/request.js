const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  serviceType: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);