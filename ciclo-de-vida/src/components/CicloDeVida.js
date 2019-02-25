import React, { Component } from 'react';

class CicloDeVida extends Component {

  constructor(){
    console.log("Constructor");
    super();
    this.state = { mostrarComponente: true};
  }

  render(){
    console.log("Render");
    console.log(this.props);
    const {descripcion, atributoEjemplo} = this.props;

    if(this.state.mostrarComponente){
      return (
        <div className="CicloDeVida">
          <h2>{descripcion}</h2>
          <button>
            Descomntar Compoente
          </button>
        </div>);
    }else{
        return (
          <div className="CicloDeVida">
            <button>
              Montar Componente
            </button>
          </div>);
    }
  }

}

export default CicloDeVida;
