import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/adz-removebg-preview.png';
import logo1 from '../images/adz-w.jpg';
export default function Navbar({dark , setDark}) {
  return (
    <nav className="navbar">
        <img src={dark? logo1: logo} alt="" className="img50" />
    
      <div className="nav-right">
      <div className="nav-links">
        <Link to="/Admin" className={dark? "darkLi": "li"}>Home</Link>
        <Link to="/Manage" className={dark? "darkLi": "li"}>Manage ads</Link>
        <Link to='/Dashboard' className={dark? "darkLi": "li"}>Dash Board</Link>
        <Link to="/" className={dark? "darkLi": "li"}>Logout</Link>
      </div>
      </div>
    </nav>
  );
}
