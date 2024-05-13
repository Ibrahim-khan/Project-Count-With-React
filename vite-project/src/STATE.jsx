import React, { Component } from 'react'

export default class STATE extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    Increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    Decrement = () => {
        this.setState({
            count : this.state.count - 1
        })
    }

    Reset = () => {
      this.setState({
          count : this.state. Reset
      })
    }
    

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.Increment}disabled = {count === 5 ? true : false}>+</button>
        <button onClick={this.Decrement}disabled = {count === -5? true : false}>-</button>
        <button onClick={this.Reset}disabled = {count === 0? true : false}>0</button>
      </div>
    )
  } 
}
