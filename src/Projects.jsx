import React, { useEffect } from 'react';
import './Projects.css';
import SDC from './images/SDC.png';
import CGRP from './images/CGRP.png';
import JAM from './images/JAM.png';
import SS12 from './images/SS12.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const projects = [
    {
      title: "SS12 Code for a Cause 2025",
      description:
        "Collaborated with a team of 7 in developing a gamified ASL learning mobile app. Using React Native Expo with TypeScript, I focused on frontend development and design of the app. Additionally, I conducted research into UI/UX strategies tailored for ADHD-friendly design, emphasizing dopamine regulation and habit-building techniques.",
      image: SS12,
      link: 'https://github.com/vicat0ria/chipi-chipi/',
    },
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
        "Secured 3rd place in a university-wide AI competition by developing a prototype of a personalized AI-driven course planner to optimize student schedules. Designed and developed a website prototype, and contributed to the research and implementation.",
      image: JAM,
      link: 'https://albertorubalcava.com/AI-Jam2024/',
    },    
  ];

    useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: false, 
      });
    }, []);

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
          data-aos="fade-up"
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