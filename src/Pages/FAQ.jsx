import React, { useState } from "react";
import "../styles/FAQ.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Edupravahaa offer?",
      answer:
        "We provide comprehensive digital learning solutions including online IT training, software development courses, career guidance, and interactive sessions with industry experts.",
    },
    {
      question: "Who can join the online classes?",
      answer:
        "Our programs are designed for students, professionals, and IT enthusiasts looking to upgrade skills or learn new technologies from scratch.",
    },
    {
      question: "Do you provide certificates?",
      answer:
        "Yes! Upon successful completion of a course, you will receive a verified certificate recognized by Edupravahaa and industry partners.",
    },
    {
      question: "How do I interact with teachers?",
      answer:
        "Our platform allows live online sessions, Q&A forums, discussion boards, and one-on-one mentorship with experienced IT professionals.",
    },
    {
      question: "What technologies are covered?",
      answer:
        "We cover a wide range of technologies including Web Development, Python, Java, AI & ML, Data Science, Cloud Computing, and more.",
    },
    {
      question: "Can I get a trial class before enrolling?",
      answer:
        "Absolutely! We offer free demo classes for most courses to help you understand our teaching methodology and quality before enrollment.",
    },
    {
      question: "Is technical support available?",
      answer:
        "Yes, our support team is available 24/7 to assist you with technical issues, course queries, and account management.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>
          Have questions about our courses or platform? Find answers to common
          queries below. If you don’t see your question, reach out to us directly!
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              {activeIndex === index ? (
                <FiChevronUp className="faq-icon" />
              ) : (
                <FiChevronDown className="faq-icon" />
              )}
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "500px" : "0px",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
