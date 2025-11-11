import React, { useState } from "react";
import "../styles/Navbar.css";
import { Search, Menu, X } from "react-feather";
import logo from "../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="EPTPRAVAHAA Logo" className="logo-img" />
        <h1 className="logo-title">EPTPRAVAHAA EDU TECH SOLUTIONS</h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active-link" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className={({ isActive }) => (isActive ? "active-link" : "")}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/Services" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Services
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/Courses" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Courses
          </NavLink>
        </li> */}
        <li>
          <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Contact Us
          </NavLink>
        </li>
      </ul>

      {/* Search Box */}
      {/* <div className="nav-search">
        <input type="text" placeholder="Search courses, services..." />
        <Search size={20} className="search-icon" />
      </div> */}
    </nav>
  );
}

export default Navbar;
