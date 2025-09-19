// Experience.js
import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className='margining'id="experience" >
      <nav class="tmln tmln--box tmln--hr" >
        <h2 class="tmln__header" >Work Experience</h2>
          <ul class="tmln__list">
              <li class="tmln__item tmln__item--bg-lght" >
              <span data-title>June 2025 - August 2025</span>
              <h3 class="tmln__item-headline">Software Engineer Intern</h3>
              <h4 class="tmln__item-headline">Northrop Grumman</h4>
              <p>• Assisted the team in the development of transceivers, focusing on design, implementation, and testing.<br/>•	Developed automated testing scripts and tools to streamline testing processes.<br/>•	Utilized C++ for coding and software development related to transceiver projects.</p>
            </li>
            <li class="tmln__item tmln__item--bg-lght" >
              <span data-title>June 2024 - Present</span>
              <h3 class="tmln__item-headline">Web Development - Student Assistant</h3>
              <h4 class="tmln__item-headline">CSUN IT</h4>
              <p>• Develop an AI-focused course recommendation planner in Python utilizing 20 years of CSUN course data, enhancing student academic planning by recommending classes based on completed coursework and academic goals.<br/>• Work with other student assistants and professionals to ensure the model has a 95% accuracy benchmark before deploying the tool, ensuring reliability to students and advisors.</p>
            </li>
            <li class="tmln__item tmln__item--bg-lght">
              <span data-title>June 2023 - June 2024</span>
              <h3 class="tmln__item-headline">Admin & Finance - Student Assistant</h3>
              <h4 class="tmln__item-headline">CSUN IT</h4>
              <p>• Assisted and supported IT directors, staff, and faculty with daily tasks such as managing 150 IT student assistants' payroll.<br/>• Gained exposure to the daily operations of numerous departments throughout the IT Department such as Information Security, Database, App Development, and Web Development.</p>
            </li>
          </ul>
      </nav>
    </div>
  );
};

export default Experience;

