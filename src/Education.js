import React from "react";
import './App.css'
const Education = () => {
  const educationDetails = [
    { degree: "B.E. in Artificial Intelligence and Machine Learning", institution: "Sri Eshwar College of Engineering", year: "2023 - 2027", grade: "Ongoing" },
    { degree: "HSC", institution: "Adharsh Vidyalaya Matric Higher Secondary School", year: "2021 - 2023", grade: "84.83%" },
    { degree: "SSLC", institution: "Venkitaraj Matric Higher Secondary School", year: "2020 - 2021", grade: "All Pass" },
  ];

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Education</h1>
      <p style={subHeadingStyle}>A snapshot of my academic background:</p>
      <div style={gridStyle}>
        {educationDetails.map((edu, index) => (
          <div key={index} style={cardStyle}>
            <h3 style={degreeStyle}>{edu.degree}</h3>
            <p><strong>Institution:</strong> {edu.institution}</p>
            <p><strong>Year:</strong> {edu.year}</p>
            <p><strong>Grade:</strong> {edu.grade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  padding: "40px 20px",
  textAlign: "center",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  fontSize: "2rem",
  color: "#2d4059",
};

const subHeadingStyle = {
  color: "#555",
  marginBottom: "20px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "20px",
  backgroundColor: "#f4f4f9",
  textAlign: "left",
};

const degreeStyle = {
  color: "#ea5455",
};

export default Education;
