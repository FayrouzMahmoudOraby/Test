const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  items: [String],
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'preparing', 'on the way', 'delivered'],
  },
});

module.exports = mongoose.model('Order', OrderSchema);
