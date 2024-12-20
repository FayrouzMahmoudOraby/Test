// import React from 'react';
// import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';
// const Navbar = () => {
//   return (
//     <nav className="navbar">

//       <a href="/" className="logo">
//         <img src={logo} alt="Gelato Logo" />
//       </a>
//       <ul className="navbar-list">
//         <li className="navbar-item"><Link to="/AboutUs" className="navbar-link">Home</Link></li>
//         <li className="navbar-item"><Link to="/" className="navbar-link">About US</Link></li>
//         <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact</Link></li>
//         <li className="navbar-item"><Link to="/signup" className="navbar-link">Signup</Link></li>
//       </ul>

     
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/AboutUs" className="navbar-link">About Us</Link></li>
        <li className="navbar-item"><Link to="/contact" className="navbar-link">Contact</Link></li>
        <li className="navbar-item"><Link to="/signup" className="navbar-link">Signup</Link></li>
      </ul>
      <div className="navbar-logo">Ruby Crush</div>
    </nav>
  );
}

export default Navbar;