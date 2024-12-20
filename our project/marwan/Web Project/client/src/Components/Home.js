import React from 'react';
import Icecream from '../assets/Icecream.png';
import chooseicecream from '../assets/chooseicecream.jpg';
import icecream from '../assets/flavor.png';
import { Parallax } from 'react-parallax';


function Home() {
 return (
    <div className="home-container">
      <div className="home-items">
        <div className="image-container1" style={{backgroundImage: `url(${icecream})`}}>
            <div className="content-container1">
              <p>HAND CRAFTED</p>
              <h1>ICE CREAM</h1>
              <button>MENU</button>
            </div>
        </div>
      </div>

      <div className="home-item">
         <div className="image-container2" style={{backgroundImage: `url(${chooseicecream})`}}/>
           <div className="content-containers"/>
            <div className="home-flavors">
                <h1>OUR FLAVORS</h1>
                <p>Explore our range of flavors:</p>
                <button>MENU</button>
         </div>
       </div>

      <div className="home-items">
      <div className="image-container3">
        <Parallax bgImage={chooseicecream} bgImageAlt="the cat" strength={400}>
                <div className="content-container2">
                <p>HAND CRAFTED</p>
              <h1>ICE CREAM</h1>
              <button>MENU</button>
                </div>
        </Parallax>
      </div>
      </div>

      <div className="home-item">
           <div className="content-containers"/>
            <div className="home-flavors">
                <h1>OUR FLAVORS</h1>
                <p>Explore our range of flavors:</p>
                <button>MENU</button>
           </div>
           <div className="image-container2" style={{backgroundImage: `url(${chooseicecream})`}}/>
       </div>

      </div>
     
 );
 }
 export default Home;