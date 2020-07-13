import React, { Component } from 'react'

class TitleCounterClass extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			name: ''
		}
	}

	componentDidMount() {
		console.log('componentDidMount in TitleCounterClass')
		document.title = `Clicked ${this.state.count} times`
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.count !== this.state.count) {
			console.log('componentDidUpdate in TitleCoutnerClass - updating document title')
			document.title = `Class: clicked ${this.state.count} times`
		}
	}

	render() {
		return (
			<>
				<input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} /> Input: {this.state.name}<br/>

				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
					Clicked {this.state.count} times
				</button>
			</>
		)
	}
}

export default TitleCounterClass
