import React, { Component } from 'react'

export default class Boton extends Component {
  render() {

    const {handlerCount} = this.props;
    return (
      <div>
        <button onClick={handlerCount}>Contar</button>
      </div>
    )
  }
}
