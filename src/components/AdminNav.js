import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/adz-removebg-preview.png';
import logo1 from '../images/adz-w.jpg';
export default function Navbar({dark , setDark}) {
  const [isMobileMenuOpen, setMobileMenuOpen]=useState(false);

  const toggleMobileMenu=()=>{
    setMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <nav className="navbar">
        <img src={dark? logo1: logo} alt="" className="img50" />
        <div className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <span class={dark? 'bar2' : "bar"}></span>
          <span class={dark? 'bar2' : "bar"}></span>
          <span class={dark? 'bar2' : "bar"}></span>
        </div>
      <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/Admin" className={dark? "darkLi": "li"}>Home</Link>
        <Link to="/Manage" className={dark? "darkLi": "li"}>Manage ads</Link>
        <Link to='/Dashboard' className={dark? "darkLi": "li"}>Dash Board</Link>
        <Link to="/" className={dark? "darkLi": "li"}>Logout</Link>
      </div>
    </nav>
  );
}
