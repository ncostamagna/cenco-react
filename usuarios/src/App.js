import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Herencia from './components/Herencia';
import Composicion from './components/Composicion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Herencia></Herencia>
        <hr />
        <Composicion></Composicion>
      </div>
    );
  }
}

export default App;
