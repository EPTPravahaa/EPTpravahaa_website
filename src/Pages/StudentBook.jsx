import React from "react";
import "../styles/Product.css";
import edupravahaa from "../assets/images/traning.jpg";
import { CheckCircle } from "react-feather";

function EDUPravahaa() {
  const features = [
    {
      title: "Expert IT Trainers",
      desc: "Learn from top professionals with real-world experience in software development and IT solutions.",
    },
    {
      title: "Live Interactive Classes",
      desc: "Join engaging live sessions packed with coding challenges, discussions, and projects.",
    },
    {
      title: "Flexible Learning",
      desc: "Access your learning materials anytime, anywhere, and grow at your own pace with mentorship.",
    },
    {
      title: "Cutting-edge Courses",
      desc: "Master technologies like AI, Web Development, DevOps, and Data Science through practical training.",
    },
  ];

  return (
    <section className="edu-section">
      {/* Hero Section */}
     <div className="edu-hero">
  <div className="edu-hero-content">
    <div className="edu-text">
      <h1>
        Master Future-Ready Skills with <span>EDU PRAVAHAA</span>
      </h1>
      <p>
        Learn cutting-edge technologies with expert trainers through live interactive sessions
        designed to make you job-ready.
      </p>
      <p className="coming-soon">🚀 Our next batch of online training is launching soon!</p>
      {/* <button className="cta-btn" disabled>
        Coming Soon
      </button> */}
    </div>

    <div className="edu-image">
      <img src={edupravahaa} alt="EDU PRAVAHAA Platform" />
      <div className="glow-circle"></div>
    </div>
  </div>
</div>


      {/* Features Section */}
      <div className="edu-features">
        <h2>Why Choose EDU PRAVAHAA?</h2>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="icon-circle">
                <CheckCircle color="#fff" size={28} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="edu-cta">
        <h2>Transform Your IT Career with EDU PRAVAHAA</h2>
        <p>Be the first to join when we launch — stay tuned for our next batch announcement!</p>
        <button className="cta-btn" disabled>
          Coming Soon
        </button>
      </div>
    </section>
  );
}

export default EDUPravahaa;
