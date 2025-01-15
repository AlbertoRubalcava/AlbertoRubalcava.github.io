// Experience.js
import React from "react";
import "./Experience.css";
import CSUN from "./images/CSUN.png";

const events = [
  {
    date: "June 2024 - Present",
    title: "Web Developer Student Assistant",
    company: "CSUN IT",
    description:
      "Develop an AI-focused course recommendation planner in Python utilizing 20 years of CSUN course data, enhancing student academic planning by recommending classes based on completed coursework and academic goals. Work with other student assistants and professionals to ensure the model has a 95% accuracy benchmark before deploying the tool, ensuring reliability to students and advisors.",
    image: CSUN,
  },
  {
    date: "June 2023 - June 2024",
    title: "Admin & Finance Student Assistant",
    company: "CSUN IT",
    description:
      "Assisted and supported IT directors, staff, and faculty with daily tasks such as managing 150 IT student assistants' payroll. Gained exposure to the daily operations of numerous departments throughout the IT Department such as Information Security, Database, App Development, and Web Development.",
    image: CSUN,
  },
];

const Experience = () => {
  return (
    <div className='margining'id="experience" >
      <nav class="tmln tmln--box tmln--hr" >
        <h2 class="tmln__header" >Work Experience</h2>
          <ul class="tmln__list">
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

