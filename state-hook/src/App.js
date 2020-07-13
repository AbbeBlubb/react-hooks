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
				<h1>ClassCounterOne- class</h1>
				<ClassCounterOne />
				<hr/>

				<h1>ClassCounterTwo - class, prevState</h1>
				<ClassCounterTwo />
				<hr/>

				<h1>HookCounterOne - useState with primitive</h1>
				<HookCounterOne />
				<hr/>

				<h1>HookCounterTwo - useState, prevState</h1>
				<HookCounterTwo />
				<hr/>

				<h1>HookCounterThree useState with object</h1>
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
