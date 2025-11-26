import React from "react";
import "../styles/Contact.css";
import { Phone, Mail, MapPin } from "react-feather";
// import LoginForm from "./Navbar/LoginForm";

function Contact() {
  const handlePhoneClick = (e) => {
    e.preventDefault();
    window.location.href = "tel:+919100241284";
  };

  const handleLocationClick = (e) => {
    e.preventDefault();
    window.open(
      "https://www.google.com/maps/search/?api=1&query=EPT+TOWERS,+Ayyappa+Society,+Madhapur,+Hyderabad,+Telangana+500081",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Let’s build something amazing together — your vision, our technology.
        </p>
      </div>

      <div className="contact-content">
        {/* Left Side - Info */}
        <div className="contact-info">
          <h2 className="info-title">Why You Should Contact Us!</h2>
          <p className="info-description">
            At <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong>, we believe innovation drives growth
            and success. We deliver high-quality <strong>software solutions</strong>,
            <strong> custom products</strong>, and <strong>web & mobile app development</strong> services
            that help businesses achieve their goals.
          </p>

          <ul className="info-list">
            <li className="info-item">
              <a href="#phone" onClick={handlePhoneClick} className="info-link">
                <Phone className="info-icon" />
                <span>+91 9100241284</span>
              </a>
            </li>
            <li className="info-item">
              <a
                href="mailto:eptpavahaa@gmail.com?subject=Inquiry%20from%20Website"
                target="_blank"
                rel="noopener noreferrer"
                className="info-link"
              >
                <Mail className="info-icon" />
                <span>eptpavahaa@gmail.com</span>
              </a>
            </li>
            <li className="info-item" onClick={handleLocationClick}>
              <MapPin className="info-icon" />
              <span>
                EPT Towers, 201, Plot No. 658, Road No. 36,
                Ayyappa Society, Madhapur, Hyderabad, Telangana 500081
              </span>
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        {/* <div className="contact-form">
          <h2 className="form-title">Let's Connect</h2>
          <LoginForm alwaysOpen={true} />
        </div> */}
      </div>
    </section>
  );
}

export default Contact;
