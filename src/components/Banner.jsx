import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import edupravahaaImage from "../assets/images/bannerimage1.png";
import rudraRidesImage from "../assets/images/bannerimage2.png";
import bannerImage3 from "../assets/images/bannerimage3.png";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Empower Your Learning with Edupravahaa",
    description:
      "Edupravahaa provides world-class educational content, interactive courses, and hands-on learning experiences designed for all ages. Learn anytime, anywhere — your growth starts here.",
    button: "Explore Edupravahaa",
    image: edupravahaaImage,
    link: "/edupravahaa",
  },
  {
    title: "Ride Smart, Ride Safe with Rudra Rides",
    description:
      "Experience effortless commuting with Rudra Rides. Book your rides instantly, track in real-time, and enjoy a comfortable journey backed by technology and trust.",
    button: "Book Your Ride",
    image: rudraRidesImage,
    link: "/rudrarides",
  },
  {
    title: "Innovate. Learn. Move Forward.",
    description:
      "At EPTPRAVAHAA EDU TECH SOLUTIONS, we combine technology, innovation, and creativity to transform ideas into impactful digital solutions for education, mobility, and beyond.",
    button: "Get Started",
    image: bannerImage3,
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
    <>
      <section className="modern-banner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`modern-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="modern-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button onClick={() => navigate(slide.link)}>{slide.button}</button>
            </div>
          </div>
        ))}
      </section>

      <div className="banner-info">
        <p className="banner-highlight">
          <span className="highlight">Edupravahaa</span> empowers students with
          personalized, high-quality learning experiences, while{" "}
          <span className="highlight">Rudra Rides</span> redefines travel with
          technology-driven, safe, and convenient mobility. Together, we help
          you <span className="highlight">explore, learn, and grow</span> every
          day.
        </p>
      </div>
    </>
  );
}

export default Banner;
