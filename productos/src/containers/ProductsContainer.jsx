import React, { Component } from 'react'
import {connect} from 'react-redux';
import Search from '../components/Products/Search';
import List from '../components/Products/List';
import { getProducts } from '../reducers';
import { setFetchProducts } from '../actions/products';

class ProductsContainer extends Component {

  fetchProductos = () => {
    const products = [{sku:'1212121', name:'pinza'},
    {sku:'333333', name:'PC'}];

    this.props.serFetchProducts(products)
  }


  render() {
      const {products} = this.props;

    return (
      <div>
        <Search 
          fetchProductos={this.fetchProductos}/>
        <List
            productos={products}>
        </List>
      </div>
    )
  }
}

const mapDispatchToPropsActions = dispatch => ({
  serFetchProducts: productos => dispatch(setFetchProducts(productos))
});

const mapStateToProps = state => ({
  products: getProducts(state)
})


export default connect(mapStateToProps, mapDispatchToPropsActions)(ProductsContainer);