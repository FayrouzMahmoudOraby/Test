import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderManagement from './components/OrderManagement';
import InventoryManagement from './components/InventoryManagement';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<OrderManagement />} />
                    <Route path="/Inventory" element={<InventoryManagement />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
