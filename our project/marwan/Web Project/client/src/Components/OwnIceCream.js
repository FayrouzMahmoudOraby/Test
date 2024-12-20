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
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);
  
    const handleOrderClick = async () => {
      const order = {
        items: [selectedFlavor, selectedTopping, selectedExtra],
        status: 'pending'
      };
  
      try {
          const response = await axios.post('http://localhost:4000/orders', order, {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
  
          window.location.href = '/ThankYou';
      } catch (error) {
          console.error('Error submitting order:', error);
      }
  };
  
      
  
  return (
    <body class="body-unique">
          <div className="icecream-container">
        <div className="icecream-menu-container">
            <button className="icecream-menu-button" onClick={() => setMenuVisible('flavors')}>
                Ice Cream Flavors+
            </button>
            <button className="icecream-menu-button" onClick={() => setMenuVisible('toppings')}>
                Toppings+
            </button>
            <button className="icecream-menu-button" onClick={() => setMenuVisible('extras')}>
                Extras+
            </button>

            {menuVisible === 'flavors' && (
                <div className="icecream-menu-items">
                    <button onClick={() => handleFlavorClick('Strawberry')}>Strawberry</button>
                    <button onClick={() => handleFlavorClick('Chocolate')}>Chocolate</button>
                    <button onClick={() => handleFlavorClick('Banana')}>Banana</button>
                    <button onClick={() => handleFlavorClick('Caramel')}>Caramel</button>
                    <button onClick={() => handleFlavorClick('Mint Chocolate')}>Mint Chocolate</button>
                    <button onClick={() => handleFlavorClick('Lotus')}>Lotus</button>
                </div>
            )}

            {menuVisible === 'toppings' && (
                <div className="icecream-menu-items">
                    <button onClick={() => handleToppingClick('Chocolate syrup')}>Chocolate syrup</button>
                    <button onClick={() => handleToppingClick('Strawberry Syrup')}>Strawberry Syrup</button>
                    <button onClick={() => handleToppingClick('Sprinkles')}>Sprinkles</button>
                    <button onClick={() => handleToppingClick('Gummy Bears')}>Gummy Bears</button>
                    <button onClick={() => handleToppingClick('Snickers')}>Snickers</button>
                </div>
            )}

            {menuVisible === 'extras' && (
                <div className="icecream-menu-items">
                    <button onClick={() => handleExtraClick('Brownies')}>Brownies</button>
                    <button onClick={() => handleExtraClick('Banana Split')}>Banana Split</button>
                </div>
            )}
        </div>

        <div className="icecream-order-summary">
            <h2>Your Order</h2>
            <ul>
                <li>{selectedFlavor}</li>
                <li>{selectedTopping}</li>
                <li>{selectedExtra}</li>
            </ul>
            <button className="icecream-order-button" onClick={handleOrderClick}>
                Order
            </button>
        </div>
    </div>
    </body>

    
);
}

export default OwnIceCream;