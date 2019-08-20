import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Regristration from './components/Regristration'
import {Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import { axiosWithAuth } from './utils/axiosWithAuth'

function App() {
  return (
    <div className="App">
      {/* <FriendsList/> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route exact path = '/' component = {Login} />
        <Route path = '/register' component = {Regristration} />
        <PrivateRoute path = '/friends' component = {FriendsList} />
      </header>
    </div>
  );
}

export default App;
