import React, { Component } from 'react'
import Search from '../components/Products/Search';
import List from '../components/Products/List';

export default class ProductsContainer extends Component {

    constructor(){
        super();
        this.state = {productos: []};
    }

  fetchProductos = () => {
    this.setState({productos:[
        {sku: 12321,
        name: 'televisor',
        precio: 15000,
        tipo: 'RT'},
        {sku: 23421,
        name: 'Monitor',
        precio: 5000,
        tipo: 'RT'},
        {sku: 98752,
        name: 'Teclado',
        precio: 2500,
        tipo: 'ENV'}
        ,{sku: 987882,
        name: 'mouse',
        precio: 200,
        tipo: 'ENV'}
    ]})
  }


  render() {
      const {productos} = this.state;

    return (
      <div>
        <Search>
        </Search>
        <List
            productos={productos}></List>
      </div>
    )
  }
}
