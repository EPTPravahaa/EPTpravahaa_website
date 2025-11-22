import React, { useState } from "react";
import { Menu, X } from "react-feather";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{
      backdropFilter: 'blur(10px)',
      background: 'rgba(10, 20, 50, 0.6)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
      fontFamily: '"Poppins", sans-serif'
    }}>
      <div className="container">
        {/* Left Section - Logo */}
        <div className="d-flex align-items-center" style={{ gap: 'clamp(10px, 1.5vw, 15px)', cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="EPTPRAVAHAA Logo" style={{
            height: 'clamp(45px, 5vw, 55px)',
            width: 'clamp(45px, 5vw, 55px)',
            borderRadius: '12px',
            boxShadow: '0 0 20px rgba(0, 198, 255, 0.5)',
            objectFit: 'cover'
          }} />
          <h1 className="mb-0 d-none d-md-block" style={{
            fontSize: 'clamp(0.95rem, 1.5vw + 0.3rem, 1.4rem)',
            fontWeight: 700,
            background: 'linear-gradient(90deg, #00e5ff, #1e90ff, #7f00ff, #00e5ff)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientFlow 6s ease infinite',
            letterSpacing: '0.08em',
            lineHeight: 1.2,
            whiteSpace: 'nowrap'
          }}>EPTPRAVAHAA EDU TECH SOLUTIONS</h1>
        </div>

        {/* Hamburger Icon */}
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          onClick={toggleMenu}
          style={{
            border: 'none',
            background: 'transparent',
            color: '#fff',
            padding: '0.5rem'
          }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto d-lg-flex" style={{ 
            gap: 'clamp(1.5rem, 2.5vw, 2.5rem)', 
            alignItems: 'center'
          }}>
            <li className="nav-item">
              <NavLink to="/" end className="nav-link text-white" onClick={closeMenu} style={{
                fontWeight: 500,
                fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                position: 'relative',
                transition: 'all 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00e5ff'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/About" className="nav-link text-white" onClick={closeMenu} style={{
                fontWeight: 500,
                fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                position: 'relative',
                transition: 'all 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00e5ff'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Services" className="nav-link text-white" onClick={closeMenu} style={{
                fontWeight: 500,
                fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                position: 'relative',
                transition: 'all 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00e5ff'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}>
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link text-white" onClick={closeMenu} style={{
                fontWeight: 500,
                fontSize: 'clamp(0.9rem, 1vw, 1rem)',
                position: 'relative',
                transition: 'all 0.3s ease',
                padding: '0.5rem 0'
              }}
              onMouseEnter={(e) => e.target.style.color = '#00e5ff'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
