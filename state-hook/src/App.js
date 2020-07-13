import React, { Component } from 'react'
import './App.css'
import CounterClass1 from './components/CounterClass1'
import CounterClass2 from './components/CoutnerClass2'
import CounterHook1Primitive from './components/CounterHook1Primitive'
import CounterHook2PrevState from './components/CounterHook2PrevState'
import CounterHook3Object from './components/CounterHook3Object'
import CounterHook4Array from './components/CounterHook4Array'

class App extends Component {
	render() {
		return (
			<div className="App">

				<h2>CounterClass1 - class</h2>
				<CounterClass1 />
				<hr/>

				<h2>CounterClass2 - class, prevState</h2>
				<CounterClass2 />
				<hr/>

				<h2>CounterHook1Primitive - useState with primitive</h2>
				<CounterHook1Primitive />
				<hr/>

				<h2>CounterHook2PrevState - useState, prevState</h2>
				<CounterHook2PrevState />
				<hr/>

				<h2>CounterHook3Object - useState with object</h2>
				<CounterHook3Object />
				<hr/>

				<h2>CounterHook4Array - useStaste with array</h2>
				<CounterHook4Array />
				<hr/>

			</div>
		)
	}
}

export default App
