import React, { Component } from 'react'

class TimerClass extends Component {

  interval
  constructor(props) {
    super(props)

    this.state = {
       timer: 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({timer: prevState.timer + 1 }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <>
        Timer with setInterval, class - {this.state.timer} - <br/>
        <button onClick={() => clearInterval(this.interval)}>Clear interval in timer</button>
      </>
    )
  }
}

export default TimerClass
