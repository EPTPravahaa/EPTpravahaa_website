import React from "react";
import "../../styles/Navbar/ServicesDropdown.css";
import Webdevelopment from "../../assets/images/web-app.jpg";
import Devops from "../../assets/images/aws.png";
import Softwaretesting from "../../assets/images/qa.png";
// import Aidatascience from "../../assets/images/Aidatascience.png";
// import Cybersecurity from "../../assets/images/Cybersecurity.png";

function ServicesSection() {
  const services = [
    {
      title: "Web & Mobile Development",
      img: Webdevelopment,
      direction: "right",
      desc: (
        <>
          We craft scalable web and mobile apps that deliver smooth, intuitive, and fast user experiences.
          <br />• React.js for interactive web apps  
          <br />• React Native for mobile solutions  
          <br />• Python & Node.js for powerful backends  
          <br />• RESTful APIs & integrations
        </>
      ),
    },
       {
      title: "DevOps (AWS)",
      img: Devops,
      direction: "left",
      desc: (
        <>
          Streamline your development and deployment with our DevOps services built around AWS.
          <br />• Cloud architecture & deployment  
          <br />• CI/CD pipeline setup  
          <br />• Infrastructure automation  
          <br />• Continuous monitoring & optimization
        </>
      ),
    },
    {
      title: "Software Testing & QA",
      img: Softwaretesting,
      direction: "left",
      desc: (
        <>
          Ensure product reliability and user satisfaction through rigorous testing and quality checks.
          <br />• Manual & automated testing  
          <br />• Performance & load testing  
          <br />• Compatibility & security validation  
          <br />• Continuous quality monitoring
        </>
      ),
    },
    // {
    //   title: "AI & Data Science",
    //   img: Aidatascience,
    //   direction: "right",
    //   desc: (
    //     <>
    //       Unlock the potential of data with our AI-driven insights and predictive intelligence.
    //       <br />• Machine learning model development  
    //       <br />• Predictive analytics  
    //       <br />• NLP & chatbots  
    //       <br />• Data visualization & dashboards
    //     </>
    //   ),
    // },
    // {
    //   title: "Cybersecurity Solutions",
    //   img: Cybersecurity,
    //   direction: "left",
    //   desc: (
    //     <>
    //       Protect your digital assets with our end-to-end cybersecurity solutions.
    //       <br />• Network & cloud security  
    //       <br />• Vulnerability assessment & penetration testing  
    //       <br />• Data protection & compliance  
    //       <br />• Threat monitoring & risk management
    //     </>
    //   ),
    // },
  ];

  return (
    <section className="services-section">
      <div className="services-intro">
        <h2>Our Services</h2>
        <p>
          At <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong>, we combine innovation, technology, and expertise 
          to deliver powerful digital solutions. From building intelligent software to securing your 
          digital ecosystem, we empower organizations to grow, innovate, and lead in the digital era.
        </p>
      </div>

      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${
              service.direction === "right" ? "reverse" : ""
            }`}
          >
            <div className="service-image">
              <img src={service.img} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
