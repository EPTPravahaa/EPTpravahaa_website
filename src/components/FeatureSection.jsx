import React from "react";
import "../styles/FeatureSection.css";
import { Cpu, CheckCircle, Shield, Users, Share2, TrendingUp, Globe, UserCheck } from "react-feather";

const features = [
  {
    icon: <Cpu size={32} className="icon-innovation" />,
    title: "EdTech Innovation",
    description: "Edupravahaa leverages cutting-edge technology to deliver interactive and personalized learning experiences. We innovate constantly to ensure students gain skills for a digital future."
  },
  {
    icon: <CheckCircle size={32} className="icon-quality" />,
    title: "Top-Quality Learning",
    description: "Our educational content is crafted by experts to meet the highest standards. Every lesson is engaging, accurate, and designed to empower students to achieve their best."
  },
  {
    icon: <Shield size={32} className="icon-integrity" />,
    title: "Safety & Trust",
    description: "Rudra Rides ensures secure, reliable, and punctual transport services. Our commitment to safety and transparency builds trust with every journey."
  },
  {
    icon: <Users size={32} className="icon-customer" />,
    title: "Customer-Centric",
    description: "We put our users first. Whether it’s learners using Edupravahaa or commuters using Rudra Rides, every decision is made to enhance their experience and satisfaction."
  },
  {
    icon: <Share2 size={32} className="icon-collaboration" />,
    title: "Collaborative Growth",
    description: "Collaboration drives our success. We work with educators, partners, and communities to create solutions that benefit everyone involved."
  },
  {
    icon: <TrendingUp size={32} className="icon-growth" />,
    title: "Sustainable Impact",
    description: "Our goal is long-term growth for our users, employees, and communities. By embracing learning, innovation, and mobility, we create a brighter, connected future."
  },
  {
    icon: <Globe size={32} className="icon-accessibility" />,
    title: "Accessibility",
    description: "We make education and transport accessible to all. Edupravahaa delivers learning anytime, anywhere, and Rudra Rides ensures convenient mobility for communities."
  },
  {
    icon: <UserCheck size={32} className="icon-sustainability" />,
    title: "Sustainability",
    description: "We prioritize eco-friendly practices in mobility and responsible growth in education, aiming for a greener future for our planet and society."
  }
];

const FeatureSection = () => {
  return (
    <div className="features-section" id="about">
      <h2 className="section-title">Our Core Strengths</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
