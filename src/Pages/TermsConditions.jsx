import React from "react";
import "../styles/TermsConditions.css";
import { FileText, Shield, Globe, Code, Info } from "react-feather";

function TermsConditions() {
  const terms = [
    {
      icon: <Shield size={24} />,
      title: "Acceptance of Terms",
      content: (
        <p>
          By accessing or using our website or services, you agree to comply with these Terms and Conditions.
          If you do not agree with any part of these Terms, please refrain from using our services.
        </p>
      ),
    },
    {
      icon: <Globe size={24} />,
      title: "Use of Our Website",
      content: (
        <>
          <p>You agree to use our website responsibly and lawfully. You shall not:</p>
          <ul>
            <li>Engage in activities that may damage or impair the website’s functionality.</li>
            <li>Upload or transmit harmful, malicious, or illegal content.</li>
            <li>Attempt unauthorized access to systems or data.</li>
            <li>Violate applicable laws or regulations.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Code size={24} />,
      title: "Intellectual Property",
      content: (
        <p>
          All content, logos, trademarks, code, and visual materials on this website are the exclusive property of 
          <strong> EPTPRAVAHAA EDU TECH SOLUTIONS</strong> or its licensors. No material may be copied, modified, or distributed without written consent.
        </p>
      ),
    },
    {
      icon: <Info size={24} />,
      title: "Services & Modifications",
      content: (
        <p>
          Our services are subject to continuous improvement. We reserve the right to update, modify, or discontinue any product or service without prior notice.
        </p>
      ),
    },
    {
      icon: <FileText size={24} />,
      title: "Limitation of Liability",
      content: (
        <p>
          <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong> shall not be liable for any direct or indirect losses resulting from the use or inability to use our services or website. Users are responsible for their own actions.
        </p>
      ),
    },
    {
      icon: <FileText size={24} />,
      title: "Changes to Terms",
      content: (
        <p>
          We may update or modify these Terms periodically. Updated Terms will be effective immediately upon posting. We encourage users to review this page regularly.
        </p>
      ),
    },
    {
      icon: <FileText size={24} />,
      title: "Contact Us",
      content: (
        <>
          <p>For questions or concerns regarding these Terms and Conditions, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:edupravahaa@gmail.com">edupravahaa@gmail.com</a></li>
            <li><strong>Phone:</strong> +91 9100241284</li>
            <li><strong>Address:</strong> EPT Towers, 201, Plot No. 658, Road No. 36, Ayyappa Society, Madhapur, Hyderabad, Telangana 500081</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="terms-section">
      <div className="terms-header">
        <div className="header-icon">
          <FileText size={60} />
        </div>
        <h1>Terms & Conditions</h1>
        <p>
          Welcome to <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong>. 
          Please read these Terms & Conditions carefully before using our services.
        </p>
      </div>

      <div className="terms-timeline">
        {terms.map((term, index) => (
          <div className="terms-card" key={index}>
            <div className="card-header">
              <div className="card-icon">{term.icon}</div>
              <h2>{term.title}</h2>
            </div>
            <div className="card-content">{term.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TermsConditions;
