import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GetStartedSection.css";
import RudraImage from "../assets/images/getintouch.png";

const GetStartedSection = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="get-started-container">
      <div className="get-started-inner">
        <div className="get-started-content">
          <h2 className="get-started-title">
            Experience <span>Innovation</span> in Motion
          </h2>
          <p className="get-started-description">
            Ready to transform the way you move and learn? Discover{" "}
            <strong>Rudra Ride</strong> for seamless, safe mobility and{" "}
            <strong>Edupravahaa</strong> for engaging digital learning.
            Whether riding across the city or enhancing education, our
            solutions are built to simplify and empower your journey.
          </p>
          <p className="get-started-description">
            Take the next step toward innovation today — connect with us and
            explore how our products can drive your success.
          </p>
          <button className="get-started-btn" onClick={handleContactClick}>
            Get in Touch
          </button>
        </div>

        <div className="get-started-image">
          <img src={RudraImage} alt="Rudra Innovation" />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
