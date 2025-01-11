import React from 'react';
import './Experience.css';
import CSUN from './images/CSUN.png';
import HHC from './images/HHC.jpg';

const Experience = () => {
  const experiences = [
    {
      year: "2024 - Present",
      title: "Web Developer SA",
      company: "CSUN IT",
      description: "Develop an AI focused course recommendation planner in Python utilizing 20 years of CSUN course data, enhancing student academic planning by recommending classes based on completed coursework and academic goals.<br />• Work with other student assistants and professionals to ensure the model has a 95% accuracy benchmark before deploying the tool, ensuring reliability to students and advisors.",
      image: CSUN
    },
    {
      year: "2023 - 2024",
      title: "Admin & Finance SA",
      company: "CSUN IT",
      description: "• Assisted and supported IT directors, staff, and faculty with daily tasks such as managing 150 IT student assistant's payroll. <br /> • Gained exposure to the daily operations of numerous departments throughout the IT Department such as Information Security, Database, App Development, and Web Development. ",
      image: CSUN
    },
    {
      year: "2022-2023",
      title: "Cashier/Cook",
      company: "Hawaiian Hot Chicken",
      description: "• Maintain excellent customer service during fast-paced rushes. <br/>• Prepare and fulfill food orders quickly and accurately. <br />• Take the initiative to find extra tasks when scheduled duties are completed.",
      image: HHC
    },
  ];

  return (
    <div className="work-experience" id="experience">
      <h2 className='title' >Work Experience</h2>
      <div className="timeline-container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className={`timeline-content ${index % 2 === 0 ? "above" : "below"}`}>
                <h3>{exp.title}</h3>
                <div className="header-container">
                  <h4>{exp.company}</h4>
                  <p className="year">{exp.year}</p>
                </div>
                <p dangerouslySetInnerHTML={{ __html: exp.description }} />
              </div>
              <div className="timeline-circle">
                <img src={exp.image} alt={exp.title} className="circle-image" />
              </div>
            </div>
          ))}
        </div>
        <div className="central-line"></div>
      </div>
    </div>
  );
};

export default Experience;