import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/feedback" className="navbar-link">Feedback</Link></li>
        <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact</Link></li>
        <li className="navbar-item"><Link to="/signup" className="navbar-link">Signup</Link></li>
      </ul>
      <div className="navbar-logo">Ruby Crush</div>
    </nav>
  );
}

export default Navbar;

