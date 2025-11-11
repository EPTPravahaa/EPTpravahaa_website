import React from "react";
import "../styles/Slide.css";
import slideBackground from '../assets/images/image1.png'; // Replace with your new image if needed

function Slide() {
  return (
    <div className="slide-container" style={{ backgroundImage: `url(${slideBackground})` }}>
      <div className="slide-content">
        <h1>Empowering Learning & Mobility</h1>
        <p>
          📚 <strong>Edupravahaa</strong> delivers interactive, high-quality video lessons for students, making learning fun, engaging, and accessible anytime, anywhere.  
          🚗 <strong>Rudra Rides</strong> provides safe, fast, and reliable transportation solutions, ensuring you reach your destination hassle-free.  
          Together, we <span className="highlight">transform experiences</span> for a smarter and connected future.
        </p>
        {/* <button className="slide-btn">Learn More</button> */}
      </div>
    </div>
  );
}

export default Slide;
