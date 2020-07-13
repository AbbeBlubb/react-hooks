import React, { Component } from 'react'
import './App.css'
import TitleCounterClass from './components/TitleCounterClass'
import TitleCounterHook from './components/TitleCounterHook'
import MousemoveClass from './components/MousemoveClass'
import MousemoveHook from './components/MousemoveHook'
import MouseContainerHook from './components/MouseContainerHook'
import IntervalClass from './components/IntervalClass'
import IntervalHook from './components/IntervalHook'
import DataFetching from './components/DataFetching'

class App extends Component {
	render() {
		return (
			<div className="App">

				<h2>Title counter class</h2>
				<TitleCounterClass />
				<hr/>

				<h2>Title counter hook</h2>
				<TitleCounterHook />
				<hr/>

				<h2>Mousemove class</h2>
				<MousemoveClass />
				<hr/>

				<h2>Mousemove hook</h2>
				<MousemoveHook />
				<hr/>

				<h2>Mouse container hook</h2>
				<MouseContainerHook />
				<hr/>

				<h2>setInterval class</h2>
				<IntervalClass />
				<hr/>

				<h2>setInterval hook</h2>
				<IntervalHook />
				<hr/>

				<h2>Data fetching hook</h2>
				<DataFetching />
				<hr/>

			</div>
		)
	}
}

export default App
