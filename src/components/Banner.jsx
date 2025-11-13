import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Banner.css";

const slides = [
  {
    title: "Empower Your Learning with Edupravahaa",
    description:
      "Edupravahaa provides world-class educational content, interactive courses, and hands-on learning experiences designed for all ages. Learn anytime, anywhere — your growth starts here.",
    button: "Explore Edupravahaa",
    link: "/edupravahaa",
  },
  {
    title: "Ride Smart, Ride Safe with Rudra Ride",
    description:
      "Experience effortless commuting with Rudra Ride. Book your rides instantly, track in real-time, and enjoy a comfortable journey backed by technology and trust.",
    button: "Explore Rudra Ride",
    link: "/rudra-rides",
  },
  {
    title: "Innovate. Learn. Move Forward.",
    description:
      "At EPTPRAVAHAA EDU TECH SOLUTIONS, we combine technology, innovation, and creativity to transform ideas into impactful digital solutions for education, mobility, and beyond.",
    button: "Get Started",
    link: "/contact",
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-banner">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`text-slide ${index === current ? "active" : ""}`}
        >
          <div className="text-content">
            <h1 className="text-title">{slide.title}</h1>
            <p className="text-description">{slide.description}</p>
            <button
              className="text-button"
              onClick={() => navigate(slide.link)}
            >
              {slide.button}
            </button>
          </div>
        </div>
      ))}

      <div className="text-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

      <div className="banner-info">
        <p className="banner-highlight">
          <span className="highlight">Edupravahaa</span> empowers students with
          personalized, high-quality learning experiences, while{" "}
          <span className="highlight">Rudra Ride</span> redefines travel with
          technology-driven, safe, and convenient mobility. Together, we help
          you <span className="highlight">explore, learn, and grow</span> every
          day.
        </p>
      </div>
    </section>
  );
}

export default Banner;
