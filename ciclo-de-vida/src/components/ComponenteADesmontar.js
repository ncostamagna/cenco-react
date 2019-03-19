import React, { Component } from 'react';

class ComponenteADesmontar extends Component{

  constructor(){
    super();
    console.log("Constructor");
    this.state = { valor: 10 };
  }

  componentDidMount(){
    console.log("Montado");
    this.setState({ valor: 20 })
  }

  componentDidUpdate(){
    console.log("Se Actualizo");
  }

  componentWillUnmount(){
    console.log("Antes Desmontar");
  }

  render(){
    console.log("render");
    return(
      <div>
        <p>Valor definido: {this.state.valor}</p>
      </div>
    )
  }
}

export default ComponenteADesmontar;
