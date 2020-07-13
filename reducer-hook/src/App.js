import React, { useReducer } from 'react'
import './App.css'
import CounterOne from './components/CounterOne'
import CounterTwo from './components/CounterTwo'
import CounterThree from './components/CounterThree'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import DataFetchingOne from './components/DataFetchingOne'
import DataFetchingTwo from './components/DataFetchingTwo'


// Context created in App.js. in return(), Provider is used

const initialState = 0

const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

export const CountContext = React.createContext()

function App() {
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
		<CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>

			<div className="App">
				<h2>useReducer count with primitive as initialState</h2>
				<CounterOne />
				<hr/>

				<h2>useReducer count with object as initialState, dispatch with payload</h2>
				<CounterTwo />
				<hr/>

				<h2>Two dispatches from two useReducer hooks, one shared reducer</h2>
				<CounterThree />
				<hr/>

				<section>
					<h2>createContext() - App.js creates CountContext</h2>
					var 'count' created from useReducer in App.js: <br/>
					Count in App.js: {count}
					<hr style={{width: '30%'}} />

					<ComponentA /><br/>
					<hr style={{width: '30%'}} />

					<ComponentB /><br/>
					<hr style={{width: '30%'}} />

					<ComponentC /><br/>
				</section>
				<hr/>

				<h2>Data fetching 1: 3 useState for loading-flag/error-flag/post, 1 useEffect for fetch on did mount</h2>
				<DataFetchingOne />
				<hr/>

				<h2>Data feching 2: useEffect for fetch, useReducer for flags</h2>
				<DataFetchingTwo />
				<hr/>

			</div>
		</CountContext.Provider>
	)
}

export default App
