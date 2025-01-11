import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.css';
import Introduction from './Introduction';
import Experience from './Experience';
import Projects from './Projects';


function App() {

  return (
    <div className="App">
          <Navbar />
          <Introduction />
          <Experience />
          <Projects />
    </div>
  );
}

export default App;
