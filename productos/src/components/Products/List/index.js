import React, { Component } from 'react'
import Dash from './Dash';

export default class List extends Component {
  render() {
    const {productos} = this.props;
    console.log(productos);
    
    return (
      <div>
         {
             productos.map((producto, index) => 
                <Dash 
                    productoValor={producto} 
                    key={producto.sku}/>
                )
         } 
      </div>
    )
  }
}
