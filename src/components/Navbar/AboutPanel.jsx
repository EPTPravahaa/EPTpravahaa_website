import React from "react";
import "../../styles/Navbar/AboutPanel.css";
import { Users, Award, Cpu, Globe } from "react-feather";
import { useNavigate } from "react-router-dom"; 
// import RudraImg from "../../assets/images/Educationimage1.png";
// import EdupravahaaImg from "../../assets/images/Educationimage1.png";

const AboutPanel = () => {
  const navigate = useNavigate();

  const values = [
    { icon: <Award size={28} />, title: "Innovation", desc: "We solve real problems creatively with cutting-edge technologies." },
    { icon: <Users size={28} />, title: "Community", desc: "Empowering students, professionals, and businesses across India." },
    { icon: <Cpu size={28} />, title: "Quality", desc: "Delivering reliable, high-quality digital solutions our users trust." },
    { icon: <Globe size={28} />, title: "Sustainability", desc: "Creating solutions with a positive impact on society and the environment." }
  ];

  return (
    <div className="about-body">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Empowering India with <span>Rudra Ride</span> & <span>Edupravahaa</span>
          </h1>
          <p className="tagline">Innovating mobility and education solutions for a smarter, faster, and brighter India.</p>
          <button className="cta-btn" onClick={() => navigate("/contact")}>Get in Touch</button>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2>Our Values</h2>
        <div className="values-cards">
          {values.map((val, idx) => (
            <div className="value-card" key={idx}>
              <div className="value-icon">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      {/* <section className="products-section">
        <h2 className="section-title">Our Products</h2>
        <div className="products-grid">
          {[ 
            { img: RudraImg, title: "Rudra Ride", desc: "Revolutionizing urban mobility with smart, safe, and eco-friendly commuting solutions.", link: "/rudra-rides" },
            { img: EdupravahaaImg, title: "Edupravahaa", desc: "Interactive video-based learning platform designed to make education fun, engaging, and effective.", link: "/edupravahaa" }
          ].map((prod, idx) => (
            <div className="product-card" key={idx}>
              <div className="product-image">
                <img src={prod.img} alt={prod.title}/>
              </div>
              <div className="product-info">
                <h3>{prod.title}</h3>
                <p>{prod.desc}</p>
                <button className="product-btn" onClick={() => navigate(prod.link)}>Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Vision Section */}
      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          To make Indian technology products globally recognized for innovation, reliability, and societal impact. Inspiring students, entrepreneurs, and professionals to trust in Indian solutions.
        </p>
      </section>

      {/* Impact Section */}
      {/* <section className="impact-section">
        <h2>Our Impact</h2>
        <div className="impact-metrics">
          <div><h3>500+</h3><p>Students Empowered</p></div>
          <div><h3>200+</h3><p>Projects Completed</p></div>
          <div><h3>50+</h3><p>Industry Partnerships</p></div>
        </div>
      </section> */}

      {/* Join Section */}
      <section className="join-section">
        <h2>Join Our Journey</h2>
        <p>Be a part of India’s innovation story. Whether you’re a student, professional, or business, our products empower you to achieve more.</p>
        <button className="cta-btn" onClick={() => navigate("/contact")}>Start Today</button>
      </section>

    </div>
  );
};

export default AboutPanel;
