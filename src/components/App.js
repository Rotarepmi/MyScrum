import React, { Component } from 'react';
import logo from '../utils/logo.svg';
import './App.css';

import Sprint from './Sprint/Sprint';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MyScrum</h1>
        </header>

        <Sprint />
      </div>
    );
  }
}

export default App;
