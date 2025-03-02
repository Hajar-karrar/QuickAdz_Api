import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/adz-removebg-preview.png';
export default function NavSign() {
  return (
    <nav className="navbar">
        <img src={logo} alt="" className="img50" />
    
      <div className="nav-right">
      <div className="nav-links">
        <Link to="/" className="li">Home</Link>
        <Link to="/AboutUs" className="li">About Us</Link>
        <Link to="/Reviews" className="li">Reviews</Link>
      </div>
      </div>
    </nav>
  );
}
