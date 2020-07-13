import React, { useReducer } from 'react'


// Two dispatches from two useReducer hooks, one shared reducer

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

function CounterThree() {
	const [count, dispatch] = useReducer(reducer, initialState)
	const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

	return (
		<>
			<p>Count dispatch1 = {count}</p>
			<button onClick={() => dispatch('increment')}>Increment</button>
			<button onClick={() => dispatch('decrement')}>Decrement</button>
			<button onClick={() => dispatch('reset')}>Reset</button>

			<p>Count dispatch2 = {countTwo}</p>
			<button onClick={() => dispatchTwo('increment')}>Increment</button>
			<button onClick={() => dispatchTwo('decrement')}>Decrement</button>
			<button onClick={() => dispatchTwo('reset')}>Reset</button>
		</>
	)
}

export default CounterThree
