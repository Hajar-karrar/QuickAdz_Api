import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/adz-removebg-preview.png';
import logo1 from '../images/adz-w.jpg';
export default function Navbar({dark, setDark, scrollToAboutUs, scrollToReviews}) {
 
  return (
    <nav className= "navbar" >
        <img src={dark? logo1: logo} alt="" className="img50" />
    
      <div className="nav-right">
      <div className="nav-links">
        <Link to="/" className={dark? "darkLi": "li"}>Home</Link>
        <Link to="/Sign" className={dark? "darkLi": "li"}>Sign up</Link>
        <Link  onClick={() => {scrollToAboutUs()}} className={dark? 'darkLi' : 'li'}>About Us</Link>
        <Link onClick={()=> {scrollToReviews()}} className={dark? "darkLi": "li"}>Reviews</Link>
      </div>
      </div>
    </nav>
  );
}
