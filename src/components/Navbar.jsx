import React, { useState } from "react";
import { Menu, X } from "react-feather";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section - Logo */}
        <div className="navbar-logo" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="EPTPRAVAHAA Logo" className="navbar-logo-img" />
          <h1 className="navbar-title">EPTPRAVAHAA EDU TECH SOLUTIONS</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" end className="nav-link" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" className="nav-link" onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" className="nav-link" onClick={closeMenu}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className="nav-link" onClick={closeMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
