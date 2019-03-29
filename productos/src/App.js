import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Products from './components/Products'
import User from './components/User';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route 
              path="/products"
              component={Products}/>
            <Route 
              path="/users"
              component={User}/>
            <Route 
              path="/"
              render={() => <Home pasar="pasar" />}
              />
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
