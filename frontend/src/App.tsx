import React from 'react';
import welcome from './welcome.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={welcome} alt="welcome-sign" className="App-splash" />
    </div>
  );
}

export default App;
