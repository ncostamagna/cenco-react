import React, { Component } from 'react';
import './App.css';
import Boton from './components/Boton';
import Label from './components/Label';

class App extends Component {

  constructor(){
    super();
    this.state = {contar: 0}
  }

  handlerCount = () => {
    let {contar} = this.state;
    contar++
    this.setState({contar});
  }

  render() {
    return (
      <div className="App">
        <Boton 
          handlerCount={this.handlerCount} />
        <Label 
          contar={this.state.contar} />
      </div>
    );
  }
}

export default App;
