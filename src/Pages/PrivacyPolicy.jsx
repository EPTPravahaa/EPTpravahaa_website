import React from "react";
import "../styles/PrivacyPolicy.css";
import { Shield, Lock, User, Database } from "react-feather";

function PrivacyPolicy() {
  const policies = [
    {
      icon: <User size={24} />,
      title: "Information We Collect",
      content: (
        <>
          <p>We collect information to deliver better services and user experiences. This may include:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email, contact number, and form submissions.</li>
            <li><strong>Technical Data:</strong> IP address, device info, browser type, and usage patterns.</li>
            <li><strong>Cookies & Analytics:</strong> To enhance usability and understand user preferences.</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Database size={24} />,
      title: "How We Use Your Information",
      content: (
        <ul>
          <li>Provide and personalize our services and digital products.</li>
          <li>Communicate updates, offers, or notifications with consent.</li>
          <li>Analyze engagement to improve website functionality.</li>
          <li>Ensure platform security and prevent unauthorized access.</li>
        </ul>
      ),
    },
    {
      icon: <Lock size={24} />,
      title: "Data Protection & Security",
      content: (
        <>
          <p>We implement encryption, restricted access, and industry-standard security practices to protect your data.</p>
          <p>No online transmission is 100% secure, but we continuously enhance our protocols.</p>
        </>
      ),
    },
    {
      icon: <Shield size={24} />,
      title: "Data Sharing & Disclosure",
      content: (
        <ul>
          <li>Shared only with trusted service providers under confidentiality agreements.</li>
          <li>Required by law, regulation, or legal process.</li>
          <li>During mergers or acquisitions with data protection safeguards.</li>
        </ul>
      ),
    },
    {
      icon: <User size={24} />,
      title: "Your Privacy Choices",
      content: (
        <p>
          You can request access, correction, or deletion of your personal data anytime at <strong>eptpavahaa@gmail.com</strong>. 
          Opt-out of marketing communications is also available.
        </p>
      ),
    },
    {
      icon: <Lock size={24} />,
      title: "Contact Us",
      content: (
        <p>
          <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong><br />
          EPT Towers, Ayyappa Society, Madhapur, Hyderabad, Telangana, India<br />
          <a href="mailto:eptpavahaa@gmail.com">eptpavahaa@gmail.com</a>
        </p>
      ),
    },
  ];

  return (
    <section className="privacy-policy-section">
      <div className="policy-header">
        <div className="header-icon">
          <Shield size={60} />
        </div>
        <h1>Privacy Policy</h1>
        <p>
          Your trust matters. At <strong>EPTPRAVAHAA EDU TECH SOLUTIONS</strong>, 
          we are committed to safeguarding your personal information with full transparency.
        </p>
      </div>

      <div className="policy-timeline">
        {policies.map((policy, index) => (
          <div className="policy-card" key={index}>
            <div className="card-header">
              <div className="card-icon">{policy.icon}</div>
              <h2>{policy.title}</h2>
            </div>
            <div className="card-content">{policy.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PrivacyPolicy;
