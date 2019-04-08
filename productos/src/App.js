import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Loadable from 'react-loadable';

const Loader = x => Loadable({
    loading: () => 'Cargando...',
    loader: x
})


const Products = Loader(() => import('./components/Products'));
const User = Loader(() => import('./components/User')); 
const Home = Loader(() => import('./components/Home')); 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route 
              path="/products"
              component={Products}/>
            <Route 
              path="/users"
              component={User}/>
            <Route 
              path="/"
              render={() => <Home pasar="pasar" />}/>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
