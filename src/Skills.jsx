import React, { useEffect } from "react";
import "./Skills.css";
import Java from "./images/Java.png";
import Python from "./images/Python.png";
import JavaScript from "./images/JavaScript.png";
import ReactLogo from "./images/React.png";
import Figma from "./images/Figma.png";
import C from "./images/C.png";
import IntelliJ from "./images/IntelliJ.png";
import PyCharm from "./images/PyCharm.png";
import Git from "./images/Git.png";
import AOS from "aos";
import "aos/dist/aos.css";


const skills = [
  { name: "Java", icon: Java },
  { name: "Python", icon: Python },
  { name: "JavaScript", icon: JavaScript },
  { name: "React", icon: ReactLogo },
  { name: "Figma", icon: Figma },
  { name: "C", icon: C },
  { name: "IntelliJ", icon: IntelliJ },
  { name: "PyCharm", icon: PyCharm },
  { name: "Git", icon: Git },
];

const Skillset = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <div className="skillset-container">
      <h2 className="skillset-title">Skillset</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item" data-aos="fade-up">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillset;
