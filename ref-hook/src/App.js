import React from 'react'
import './App.css'
import FocusInput from './components/FocusInput'
import TimerClass from './components/TimerClass'
import TimerHook from './components/TimerHook'

function App() {
	return (
		<div className="App">
			<h3>Input focus with useRef</h3>
			<FocusInput />

			<h3>Timer with class</h3>
			<TimerClass />

			<h3>Timer with function</h3>
			<TimerHook />
		</div>
	)
}

export default App
