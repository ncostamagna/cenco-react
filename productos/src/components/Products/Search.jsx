import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    const {fetchProductos} = this.props;
    return (
      <div>
        <button className="btn btn-primary" onClick={fetchProductos}>Buscar</button>
      </div>
    )
  }
}
