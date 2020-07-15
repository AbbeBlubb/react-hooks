import React from 'react'
import './App.css'
import DocTitleOne from './components/DocTitleOne'
import DocTitleTwo from './components/DocTitleTwo'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import UserForm from './components/UserForm'

function App() {
	return (
		<div className="App">
			<h3>Change doc title 1, custom hook</h3>
			<DocTitleOne />
			
			<h3>Change dock title 2, component shares the custom hook</h3>
			<DocTitleTwo />

			<h3>Counter 1, custom hook</h3>
			<CounterOne />

			<h3>Counter 2, component shares the custom hook</h3>
			<CounterTwo />

			<h3>Form</h3>
			<UserForm />
		</div>
	)
}

export default App
