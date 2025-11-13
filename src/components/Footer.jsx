import React from "react";
import "../styles/Footer.css";
import { Linkedin, Instagram } from "react-feather";
import logo from "../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Navigation Handlers
  const handlestudentbook = () => navigate("/edupravahaa");
  const handlebusinessguider = () => navigate("/rudra-rides");
  const handleFAQ = () => navigate("/FAQ");
  const handlePrivacyPolicy = () => navigate("/PrivacyPolicy");
  const handleTermsConditions = () => navigate("/TermsConditions");

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-section company-info">
          <div className="footer-logo">
            <img src={logo} alt="EPT Pravahaa Logo" />
            <h3>EPTPRAVAHAA EDU TECH SOLUTIONS PVT LTD</h3>
          </div>
          <p>
          Where innovation meets technology, crafting intelligent products, scalable software, and beautiful digital experiences that bring your ideas to life.
          </p>
          <ul className="social-icons">
            {/* <li>
              <a
                href="https://www.facebook.com/people/EPTPRAVAHAA-EDU-TECH-SOLUTIONS/61579760649607/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
            </li> */}
            <li>
              <a
                href="https://www.linkedin.com/company/eptpravahaa-edu-tech-solutions-private-limited/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/reel/DQt1yqPDxIc/?igsh=bTdlbmlzaW4ydDY0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </li>
          </ul>
        </div>

        {/* Product Section */}
        <div className="footer-section">
          <h4>Products</h4>
          <ul>
            <li onClick={handlestudentbook} className="footer-link">
              EDU PRAVAHAA
            </li>
            <li onClick={handlebusinessguider} className="footer-link">
              Rudra Ride
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li onClick={handleFAQ} className="footer-link">FAQ</li>
            <li onClick={handlePrivacyPolicy} className="footer-link">Privacy Policy</li>
            <li onClick={handleTermsConditions} className="footer-link">Terms & Conditions</li>
          </ul>
        </div>

        {/* Quick Info Section */}
        <div className="footer-section">
          <h4>Our Platforms</h4>
          <ul>
            <li>LMS Platform</li>
            <li>Rudra Ride Platform</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong> — All Rights Reserved.
        </p>
        <span>Designed & Developed by <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong></span>
      </div>
    </footer>
  );
};

export default Footer;
