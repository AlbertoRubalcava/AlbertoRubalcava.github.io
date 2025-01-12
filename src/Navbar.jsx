import React from 'react';
import './Navbar.css';
import BlackLogo from './images/BLogo.png';
import resume from './images/Alberto Rubalcava Resume Portfolio.pdf'

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#home"><div><img className="logo" src={BlackLogo}></img></div></a>
      <div className="nav-links">
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
        <a href={resume} target="_blank" rel="noopener noreferrer">resume</a>
        <a href="https://github.com/AlbertoRubalcava" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/alberto-rubalcava" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;