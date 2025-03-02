import React from 'react';
import { Link } from 'react-router-dom';
import './Navbarad.css';
import logo1 from '../images/adz-w.jpg';
export default function Navbar({dark, setDark}) {
  return (
    <nav className="navbar">
        <img src={logo1} alt="" className="img50" />
    
      <div className="nav-right">
      <div className="nav-links">
        <Link to="/Admin" className={"li1"}>Home</Link>
        <Link to="/Manage" className="li1">Manage ads</Link>
        <Link to='/Dashboard' className="li1">Dash Board</Link>
        <Link to="/" className="li1">Logout</Link>
      </div>
      </div>
    </nav>
  );
}
