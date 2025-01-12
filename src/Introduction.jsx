import React from 'react';
import './Introduction.css';
import Headshot from './images/Headshot.JPG';

const Introduction = () => {
  return (
    <div className='profile-container' id='home'>
    <div className="profile-card">
      <div className="profile-text">
        <h2>
          Hi, I'm <span className="highlight">Alberto Rubalcava</span>
        </h2>
        <p>
          I'm a junior Computer Science student studying at California State
          University, Northridge. I am passionate in Web Development, Embedded
          Systems, and Software Engineering. Explore my work below and see how I
          bring these passions to life through my projects and experience.
        </p>
      </div>
      <div className="profile-image">
        <img
          src={Headshot}
          alt="Alberto Rubalcava"
          className="profile-pic"
        />
      </div>
    </div>
    </div>
  );
};

export default Introduction;