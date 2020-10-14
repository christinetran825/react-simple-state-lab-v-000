import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props
    }
  }
  
  changeNewColor = (e) => {
    const newColor = '#333'
    this.setState({
      color: newColor
    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: {this.state.color}}} onClick={this.changeNewColor}></div>
    )
  }
}