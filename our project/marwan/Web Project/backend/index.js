const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const orderRoutes = require('./routes/orders');
const inventoryRoutes = require('./routes/inventory');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/orders', orderRoutes);
app.use('/inventory', inventoryRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
