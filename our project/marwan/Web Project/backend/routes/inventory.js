const express = require('express');
const router = express.Router();
// ... other imports
const { MongoClient, ObjectId } = require('mongodb');

const uri = "mongodb+srv://Marwan:Ninjaboylol9@cluster0.d9xgsoa.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let itemsCollection;

client.connect(err => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
    console.log('Connected to MongoDB');
    const db = client.db('test');
    itemsCollection = db.collection('items');
});

// Get current inventory
router.get('/', async (req, res) => {
    try {
        const items = await itemsCollection.find({}).toArray();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Add stock to an item
router.post('/add-stock/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const { quantityToAdd } = req.body;

        await itemsCollection.updateOne(
            { _id: ObjectId(itemId) },
            { $inc: { quantity: quantityToAdd } }
        );

        res.json({ message: 'Stock added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// Remove stock from an item
router.post('/remove-stock/:id', async (req, res) => {
    try {
        const itemId = req.params.id;
        const { quantityToRemove } = req.body;

        await itemsCollection.updateOne(
            { _id: ObjectId(itemId) },
            { $inc: { quantity: -quantityToRemove } }
        );

        res.json({ message: 'Stock removed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;

