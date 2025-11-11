import React from "react";
import "../styles/Rides.css";
import { FaCar, FaClock, FaCreditCard, FaMapMarkerAlt } from "react-icons/fa";
import bannerimage3 from "../assets/images/bannerimage3.png";

function AboutRudraRides() {
  const features = [
    {
      icon: <FaCar size={40} color="#fff" />,
      title: "Instant Cab Booking",
      desc: "Book your ride in seconds — quick, simple, and seamless experience.",
    },
    {
      icon: <FaClock size={40} color="#fff" />,
      title: "24/7 Service",
      desc: "Anytime, anywhere — our rides are available round the clock.",
    },
    {
      icon: <FaCreditCard size={40} color="#fff" />,
      title: "Secure Payments",
      desc: "Enjoy safe and easy payments through cards, UPI, or wallets.",
    },
    {
      icon: <FaMapMarkerAlt size={40} color="#fff" />,
      title: "Live Tracking",
      desc: "Stay updated with real-time tracking from pickup to drop.",
    },
  ];

  return (
    <div className="rides-page">
      {/* HERO SECTION */}
      <section className="rides-hero">
        <div className="hero-content">
          <h1>Rudra Rides</h1>
          <p>
            Your smart, reliable, and secure cab service designed for modern commuting.
            Enjoy comfort, safety, and convenience wherever you go.
          </p>
         <button className="cta-btn" disabled>
        Coming Soon
      </button>
        </div>
        <div className="hero-image">
          <img src={bannerimage3} alt="Rudra Rides Car" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="rides-about">
        <h2>Your Smart Ride Solution</h2>
        <p>
          Experience effortless travel with <strong>Rudra Rides</strong>. Whether you're
          heading across town or out of the city, we make every journey smooth, secure,
          and enjoyable. With 24/7 support, real-time tracking, and flexible payment
          options, you're always in control.
        </p>
      </section>

      {/* FEATURES SECTION */}
      <section className="rides-features">
        <h2>Why Choose Rudra Rides?</h2>
        <div className="features-grid">
          {features.map((feature, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutRudraRides;
