import React, { Component } from 'react'

class Button extends Component{
  constructor(props){
    super(props);
    this.borderColor = '#09f';
  }


  render(){
    return(
      <button style={{borderColor: this.borderColor, display: 'block'}}>
        {this.props.label}
      </button>
    )
  }
}


class ButtonDanger extends Button{
  constructor(props){
    super(props);
    this.borderColor = 'red';
  }
}

class ButtonWithLegend extends Button{
  render(){
    return (
      <div>
        {super.render()}
        <small>{this.props.legend}</small>
      </div>
    )
  }
}

export default class Herencia extends Component {
  render() {
    return (
      <div>
        <h3>Herencia</h3>
        <Button label='click aqui'></Button>
        <br />
        <ButtonDanger label='Danger!!'></ButtonDanger>
        <br />
        <ButtonWithLegend 
          label ='Click con leyenda'
          legend='Una leyenda'/>
      </div>
    )
  }
}
