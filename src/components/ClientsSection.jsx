import React from "react";
import "../styles/ClientsSection.css";
import { User, Users, BarChart2, Video, Smartphone, Play } from "react-feather";

import rudraRides from "../assets/images/rudra.png";
import edupravahaa from "../assets/images/Edupravahaa.png";

const productsData = [
  {
    name: "Rudra Ride",
    logo: rudraRides,
    description: `Rudra Ride is a cutting-edge mobility platform that offers seamless ride solutions. 
      Designed for convenience and safety, it connects riders with reliable transportation services for a smooth journey.`,
    features: [
      { icon: <Smartphone />, text: "Easy Booking – Request a ride through our intuitive mobile app." },
      { icon: <User />, text: "Safe & Reliable – Verified drivers and secure rides for all passengers." },
      { icon: <BarChart2 />, text: "Real-Time Tracking – Track your ride live with accurate location updates." },
      { icon: <Play />, text: "Seamless Payments – Multiple payment options for a hassle-free experience." },
      { icon: <Users />, text: "Customer Support – 24/7 support to resolve any ride-related issues." },
    ],
  },
  {
    name: "Edupravahaa",
    logo: edupravahaa,
    description: `Edupravahaa is an innovative education platform aimed at making learning more accessible, 
      engaging, and effective for students at all levels. It empowers both students and educators with digital-first tools.`,
    features: [
      { icon: <User />, text: "Student-Centric Learning – Lessons, tests, and progress tracking made easy." },
      { icon: <Users />, text: "Teacher Tools – Course creation, test management, and performance insights." },
      { icon: <BarChart2 />, text: "Smart Dashboards – Visual reports on learning trends and results." },
      { icon: <Video />, text: "Live Classes – Real-time online classroom integration." },
      { icon: <Smartphone />, text: "Multi-Device Access – Fully responsive for web and mobile." },
    ],
  }
];

const ProductsSection = () => {
  return (
    <div className="clients-section" id="products">
      <div className="clients-header">
        <h2>Our Products</h2>
      </div>

      <div className="clients-cards-container">
        {productsData.map((product, index) => (
          <div className="client-card" key={index}>
            <div className="client-header">
              <img src={product.logo} alt={`${product.name} logo`}
                className={`client-logo ${product.name === "Edupravahaa" ? "edu-logo" : ""}`} />
              <h3 className="client-name">{product.name}</h3>
            </div>

            <p className="client-description">{product.description}</p>

            <div className="key-features">
              <h4>Key Features</h4>
              {product.features.map((feature, idx) => (
                <div className="feature" key={idx}>
                  <span className="client-icons">{feature.icon}</span>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
