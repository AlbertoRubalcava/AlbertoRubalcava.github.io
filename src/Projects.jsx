import React from 'react';
import './Projects.css';
import SDC from './images/SDC.png';
import CGRP from './images/CGRP.png';
import JAM from './images/JAM.png';

const Projects = () => {
  const projects = [
    {
      title: "Car Reservation System",
      description:
        "Designed and developed the front end of the car reservation system, allowing users to search available cars, make reservations, and complete the checkout process.",
      image: CGRP,
      link: 'https://github.com/wramos1/cgrp-fe',
    },
    {
      title: "Mini Golf Robot",
      description:
        "Collaborated with a team to design, develop, and test a competition-ready robot. Focused on the wireless Arduino integration, movement sequences, and sensor functionality to ensure optimal performance.",
      image: SDC,
      link: 'https://github.com/AlbertoRubalcava/SDC2024',
    },
    {
      title: "AI Jam 2024",
      description:
        "Collaborated with a team to design, develop, and test a competition-ready robot. Focused on the wireless Arduino integration, movement sequences, and sensor functionality to ensure optimal performance.",
      image: JAM,
      link: 'https://albertorubalcava.com/AI-Jam2024/',
    },
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
        <div
          className={`project-card-wrapper ${
            index % 2 === 0 ? "" : "reverse"
          }`}
          key={index}
        >
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`project-card-link ${index % 2 === 0 ? "" : "reverse"}`}
          >
            <div className={`project-card ${index % 2 === 0 ? "" : "reverse"}`}>
              <div className="project-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </a>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;