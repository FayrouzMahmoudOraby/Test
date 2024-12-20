const mongoose = require('mongoose');

const InventoryItemSchema = new mongoose.Schema({
    itemName: String,
    quantity: Number,
});

module.exports = mongoose.model('InventoryItem', InventoryItemSchema);
