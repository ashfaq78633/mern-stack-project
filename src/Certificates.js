import React from "react";
import './App.css';

const Certificates = ({ certifications }) => {
  const defaultCertifications = [
    "Learn C, C++, Python | Codechef",
    "Complete FullStack Web Development Course | Internshala",
    "Complete Ethical Hacking Course | Internshala",
    "React.js Advanced Course | Coursera",
    "Machine Learning Basics | Udemy",
    "AWS Fundamentals | AWS Training",
    "Data Science Essentials | edX",
  ];

  const certificationList = certifications || defaultCertifications;

  return (
    <div className="certificates-container">
      <h2 className="certificates-heading">Certifications</h2>
      <ul className="certificates-list">
        {certificationList.map((cert, index) => (
          <li key={index} className="certificates-item">
            {cert}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
