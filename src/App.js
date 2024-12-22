import React, { useState, useEffect } from 'react';
import './App.css';
import BlackLogo from './images/BLogo.png';

function App() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="App">
      <img src={BlackLogo} alt="Logo" className="Logo"></img>
      <h3>Alberto Rubalcava's Portfolio</h3>
      <p>Coming Soon{dots}</p>
    </div>
  );
}

export default App;
