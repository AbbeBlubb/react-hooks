import React, { Component } from 'react'
import './App.css'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import ClassCounterTwo from './components/ClassCounterTwo'
import HookCounterFour from './components/HookCounterFour'

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>ClassCounterOne</h1>
				<ClassCounterOne />
				<hr/>

				<h1>ClassCounterTwo</h1>
				<ClassCounterTwo />
				<hr/>

				<h1>HookCounterOne</h1>
				<HookCounterOne />
				<hr/>

				<h1>HookCounterTwo</h1>
				<HookCounterTwo />
				<hr/>

				<h1>HookCounterThree</h1>
				<HookCounterThree />
				<hr/>

				<h1>HookCounterFour</h1>
				<HookCounterFour />
				<hr/>
			</div>
		)
	}
}

export default App
