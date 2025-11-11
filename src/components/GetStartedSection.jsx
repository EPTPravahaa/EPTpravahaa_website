import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../styles/GetStartedSection.css";
import RudraImage from "../assets/images/Educationimage1.png"; // Use main product image

const GetStartedSection = () => {
  const navigate = useNavigate(); 

  const handleContactClick = () => {
    navigate("/contact"); 
  };

  return (
    <div className="get-started-container">
      <div className="get-started-card">
        <div className="get-started-image">
          <img src={RudraImage} alt="Rudra Rides Illustration" />
        </div>
        <div className="get-started-content">
          <h2>Experience Innovation in Motion</h2>
          <p>
            Ready to transform the way you move and learn? Explore our products: <strong>Rudra Rides</strong> for seamless, safe, and convenient mobility, and <strong>Edupravahaa</strong> for engaging digital learning experiences. 
            Whether you’re riding across the city or enhancing educational journeys, our solutions are designed to make life simpler, smarter, and more enjoyable.
          </p>
          <p>
            Take the next step towards innovation today. Click below to connect with us and discover how our products can empower your journey.
          </p>
          <button className="get-started-btn" onClick={handleContactClick}>
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSection;
