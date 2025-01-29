// Projects.js
import React from "react";
import './App.css'
const Projects = () => {
  const projects = [
    {
      title: "Cyber Management System",
      description:
        "A cyber management system (CMS) is a structured approach to managing and securing an organization's digital infrastructure, data, and information assets. It involves implementing policies, procedures, technologies, and practices to identify, assess, mitigate, and respond to cybersecurity risks effectively.",
      language: "C",
    },
    {
      title: "Event Management System",
      description:
        "An event management system is a software platform designed to streamline the planning, organization, and execution of events. It includes features such as event registration, ticketing, scheduling, venue management, attendee management, communication tools, and analytics/reporting functionalities.",
      language: "C",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-heading">Projects</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index} className="projects-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Programming Language:</strong> {project.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
