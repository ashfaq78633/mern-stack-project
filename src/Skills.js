import React from "react";
import './App.css';

const Skills = () => {
  const technicalSkills = [
    "C",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <ul className="skills-list">
        {technicalSkills.map((skill, index) => (
          <li key={index} className="skills-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
