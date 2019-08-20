import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Regristration from './components/Regristration'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Regristration/>
        <Login/>
      </header>
    </div>
  );
}

export default App;
