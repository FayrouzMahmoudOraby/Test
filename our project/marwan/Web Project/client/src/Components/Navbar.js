import React from 'react';
import logo from '../assets/logo.png';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
const Navbar = () => {
 return (
  <nav className="navbar">
  <Link to="/Home" className="logo">
    <img src={logo} alt="Gelato Logo" />
  </Link>

  <ul>
    <li>
      <Link to="/reservation">Reservation</Link>
    </li>
    <li>
      <Link to="/purchase">Purchase</Link>
    </li>
    <li>
      <Link to="/MakeYourOwn">Make your own</Link>
    </li>
    <li>
      <Link to="/feedback">Feedback</Link>
    </li>
  </ul>

  <ul>
    <li>
      <Link to="/login">Login</Link>
    </li>
    <li>
      <Link to="/sign-up">Sign up</Link>
    </li>
    <li>
      <Link to="/tracking">Tracking</Link>
    </li>
  </ul>
</nav>
 )
}
export default Navbar;