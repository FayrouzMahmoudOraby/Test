import React from 'react';
import Icecream from '../assets/Icecream.png';
import chooseicecream from '../assets/chooseicecream.jpg';
import icecream from '../assets/flavor.png';
import '../App.css';
import { Parallax } from 'react-parallax';
import { useState } from 'react';
import "../App.css";
import { useEffect } from 'react';
import axios from 'axios';


function OwnIceCream() {
    const [selectedFlavor, setSelectedFlavor] = useState('');
    const [selectedTopping, setSelectedTopping] = useState('');
    const [selectedExtra, setSelectedExtra] = useState('');
    const [menuVisible, setMenuVisible] = useState('flavors');
  
    const handleFlavorClick = (flavor) => {
      setSelectedFlavor(flavor);
      setMenuVisible('flavors');
    };
  
    const handleToppingClick = (topping) => {
      setSelectedTopping(topping);
      setMenuVisible('toppings');
    };
  
    const handleExtraClick = (extra) => {
      setSelectedExtra(extra);
      setMenuVisible('extras');
    };

    useEffect(() => {
        fetch('/manage-orders')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the fetched data to the console
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);
  
    const handleOrderClick = async () => {
        // Create the order object
        const order = {
          items: [selectedFlavor, selectedTopping, selectedExtra],  // Saving selections as items
          status: 'pending'  // Default status
        };
      
        try {
            const response = await axios.post('http://localhost:5000/orders', order, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
      
          // Navigate to the manageOrders page after successful order submission
          window.location.href = '/manage-orders';
        } catch (error) {
          console.error('Error submitting order:', error);
        }
      };
      
  
    return (
      <div className="container">
        
  
        <div className="menu-container">
          <button className="menu-button" onClick={() => setMenuVisible('flavors')}>
            Ice Cream Flavors+
          </button>
          <button className="menu-button" onClick={() => setMenuVisible('toppings')}>
            Toppings+
          </button>
          <button className="menu-button" onClick={() => setMenuVisible('extras')}>
            Extras+
          </button>
  
          {menuVisible === 'flavors' && (
            <div className="menu-items">
              <button onClick={() => handleFlavorClick('Strawberry')}>Strawberry</button>
              <button onClick={() => handleFlavorClick('Chocolate')}>Chocolate</button>
              <button onClick={() => handleFlavorClick('Banana')}>Banana</button>
              <button onClick={() => handleFlavorClick('Caramel')}>Caramel</button>
              <button onClick={() => handleFlavorClick('Mint Chocolate')}>Mint Chocolate</button>
              <button onClick={() => handleFlavorClick('Lotus')}>Lotus</button>

              
            </div>
          )}
  
          {menuVisible === 'toppings' && (
            <div className="menu-items">
              <button onClick={() => handleToppingClick('Chocolate syrup')}>Chocolate syrup</button>
              <button onClick={() => handleToppingClick('Strawberry Syrup')}>Strawberry Syrup</button>
              <button onClick={() => handleToppingClick('Sprinkles')}>Sprinkles</button>
              <button onClick={() => handleToppingClick('Gummy Bears')}>Gummy Bears</button>
              <button onClick={() => handleToppingClick('Snickers')}>Snickers</button>


            </div>
          )}
  
          {menuVisible === 'extras' && (
            <div className="menu-items">
              <button onClick={() => handleExtraClick('Brownies')}>Brownies</button>
              <button onClick={() => handleExtraClick('Banana Split')}>Banana Split</button>

            </div>
          )}
        </div>
  
        <div className="order-summary">
          <h2>Your Order</h2>
          <ul>
            <li>{selectedFlavor}</li>
            <li>{selectedTopping}</li>
            <li>{selectedExtra}</li>
          </ul>
          <button className="order-button" onClick={handleOrderClick}>
            Order
          </button>
        </div>
      </div>
    );
  }
  
  export default OwnIceCream;