import React, { Component } from 'react';
import './App.css';
import Titulo from './components/Titulo';
import CicloDeVida from './components/CicloDeVida'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Titulo />
        <CicloDeVida
            descripcion="Ciclo de Vida"
            atributoEjemplo="Sarasa"/>
      </div>
    );
  }
}

export default App;
