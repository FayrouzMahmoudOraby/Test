import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function InventoryManagement() {
    const [items, setItems] = useState([]);
    const [itemIdToAdd, setItemIdToAdd] = useState('');
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const [itemIdToRemove, setItemIdToRemove] = useState('');
    const [quantityToRemove, setQuantityToRemove] = useState(0);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = () => {
        axios.get('http://localhost:4000/inventory')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching inventory:', error);
            });
    };

    const handleAddStock = () => {
        if (itemIdToAdd && quantityToAdd > 0) {
            axios.post(`http://localhost:4000/inventory/add-stock/${itemIdToAdd}`, { quantityToAdd })
                .then(() => {
                    fetchItems();
                })
                .catch(error => {
                    console.error('Error adding stock:', error);
                });
        }
    };

    const handleRemoveStock = () => {
        if (itemIdToRemove && quantityToRemove > 0) {
            axios.post(`http://localhost:4000/inventory/remove-stock/${itemIdToRemove}`, { quantityToRemove })
                .then(() => {
                    fetchItems();
                })
                .catch(error => {
                    console.error('Error removing stock:', error);
                });
        }
    };

    return (
        <div className="inventory-management">
          <h1 className="inventory-header">Inventory Management</h1>
    
          {/* Add Stock */}
          <div className="inventory-add-stock">
            <h2 className="inventory-add-stock-header">Add Stock</h2>
            <select className="inventory-item-select" onChange={(e) => setItemIdToAdd(e.target.value)}>
              <option value="">Select an Item</option>
              {items.map(item => (
                <option key={item._id} value={item._id}>{item.name}</option>
              ))}
            </select>
            <input 
              className="inventory-quantity-input" 
              type="number" 
              value={quantityToAdd} 
              onChange={(e) => setQuantityToAdd(Number(e.target.value))} 
              placeholder="Quantity to Add"
            />
            <button className="inventory-button inventory-button--add">Add Stock</button>
          </div>
    
          {/* Remove Stock */}
          <div className="inventory-remove-stock">
            <h2 className="inventory-remove-stock-header">Remove Stock</h2>
            <select className="inventory-item-select" onChange={(e) => setItemIdToRemove(e.target.value)}>
              <option value="">Select an Item</option>
              {items.map(item => (
                <option key={item._id} value={item._id}>{item.name}</option>
              ))}
            </select>
            <input 
              className="inventory-quantity-input" 
              type="number" 
              value={quantityToRemove} 
              onChange={(e) => setQuantityToRemove(Number(e.target.value))} 
              placeholder="Quantity to Remove"
            />
            <button className="inventory-button inventory-button--remove">Remove Stock</button>
          </div>
    
          {/* Display Items */}
          <table className="inventory-table">
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    
    export default InventoryManagement;

