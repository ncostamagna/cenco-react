import React, { Component } from 'react'

export default class Dash extends Component {
  render() {
      const {productoValor} = this.props;
    return (
      <div>
        {productoValor.sku} - {productoValor.name}
      </div>
    )
  }
}
