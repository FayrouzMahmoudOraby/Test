

import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Feedback from './components/feedback';
import SignUp from './components/signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import required components

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
