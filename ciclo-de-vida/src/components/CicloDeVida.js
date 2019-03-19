import React, { Component } from 'react';
import ComponenteADesmontar from './ComponenteADesmontar'

class CicloDeVida extends Component {

  constructor(){
    super();
    this.state = { mostrarComponente: true};
  }

  render(){
    const {descripcion, atributoEjemplo} = this.props;

    if(this.state.mostrarComponente){
      return (
        <div className="CicloDeVida">
          <h2>{descripcion}</h2>
          <ComponenteADesmontar />
          <button onClick={() => this.setState({ mostrarComponente: false})}>
            Desmontar Compoente
          </button>
        </div>);
    }else{
      return (
        <div className="CicloDeVida">
          <button onClick={() => this.setState({ mostrarComponente: true})}>
            Montar Componente
          </button>
        </div>);
    }
  }

}

export default CicloDeVida;
