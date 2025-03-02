import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../images/adz-removebg-preview.png';
import logo1 from '../images/adz-w.jpg';
export default function Navbar({dark, setDark}) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu1 = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  return (
    <nav className="navbar">
        <img src={dark? logo1: logo} alt="" className="img50" />
        <div className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu1}>
          <span class={dark? "bar2": "bar"}></span>
          <span class={dark? "bar2": "bar"}></span>
          <span class={dark? "bar2": "bar"}></span>
        </div>
      
      <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <Link to="/Member" className={dark? "darkLi": "li"}>Home</Link>
        <Link to="/AddAn" className={dark? "darkLi": "li"}>Add Announce</Link>
        <Link to="#" className={dark? "darkLi": "li"}>About Us</Link>
        <Link to="#" className={dark? "darkLi": "li"}>Reviews</Link>
        <Link to="/" className={dark? "darkLi" : "li"}>Logout</Link>        
      </div>
    </nav>
  );
}
