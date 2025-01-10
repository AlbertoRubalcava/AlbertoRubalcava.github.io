import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.css';
import Introduction from './Introduction';


function App() {

  return (
    <div className="App">
          <Navbar />
          <Introduction />
    </div>
  );
}

export default App;
