import React from 'react';
import icecreamImage from '../assets/Icecream.png';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Ice Cream</h1>
      <img src={icecreamImage} alt="Delicious Ice Cream" className="home-image" />
    </div>
  );
}

export default Home;
