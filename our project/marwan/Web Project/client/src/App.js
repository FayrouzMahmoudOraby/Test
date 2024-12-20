import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import OwnIceCream from '../src/Components/OwnIceCream';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path='/MakeYourOwn' element={<OwnIceCream />}/>
          </Routes>
        </main> 
        <Footer />   
      </div>
    </Router>
  );
}

export default App;