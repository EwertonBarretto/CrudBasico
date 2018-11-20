import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import CadUser from './Caduser';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;
