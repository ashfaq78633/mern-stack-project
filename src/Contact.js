import React from "react";
import './App.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact</h2>
      <p className="contact-info">Phone: 6383139516</p>
      <p className="contact-info">
        Email: <a className="contact-link" href="mailto:ashfaq.a2023aiml@sece.ac.in">ashfaq.a2023aiml@sece.ac.in</a>
      </p>
      <p className="contact-info">
        GitHub: <a className="contact-link" href="https://github.com/your-github-ashfaq7863" target="_blank" rel="noopener noreferrer">github.com/your-github-ashfaq78633</a>
      </p>
      <p className="contact-info">
        LinkedIn: <a className="contact-link" href="https://linkedin.com/in/your-linkedin-ashfaq" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-linkedin-ashfaq</a>
      </p>
    </div>
  );
};

export default Contact;
