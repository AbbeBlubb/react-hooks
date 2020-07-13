import React, { Component } from 'react'

class CounterClass2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
  }

  render() {
    return (
      <>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </>
    )
  }
}

export default CounterClass2
