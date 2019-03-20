import React, { Component } from 'react'


class Button extends Component{
    render(){
      return(
        <button style={{borderColor: this.props.borderColor, display: 'block'}}>
          {this.props.label}
        </button>
      )
    }
  }
  
Button.defaultProps = {
    borderColor: '#09f'
}

  class ButtonDanger extends Component{
    render(){
        return(
            <Button borderColor='red' label={this.props.label} />
        )
    }
  }
  
  class ButtonWithLegend extends Component{
    render(){
      return (
        <div>
          <Button label={this.props.label}/>
          <small>{this.props.legend}</small>
        </div>
      )
    }
  }

export default class Composicion extends Component {
  render() {
    return (
        <div>
        <h3>Composicion</h3>
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
