import React, { Component } from 'react';
import './App.css';
import Titulo from './components/Titulo';
import CicloDeVida from './components/CicloDeVida.jsx'

class App extends Component {

  constructor(){
    super();
    this.state = {mostrarDetalle: false}
  }

  functionParaOcultar = () => {
    this.setState({mostrarDetalle: !this.state.mostrarDetalle})
  }

  componentDidMount(){
    console.log("Didmount");
    this.functionParaOcultar();
  }

  render() {

    return (
      <div className="App">
        <Titulo />
        <CicloDeVida
            descripcion="Ciclo de Vida"
            atributoEjemplo="Sarasa" 
            functionParaOcultar={this.functionParaOcultar}/>
        { this.state.mostrarDetalle && 
          <div>Se muestra el detalle correctamente</div> }
      </div>
    );
  }
}

export default App;
