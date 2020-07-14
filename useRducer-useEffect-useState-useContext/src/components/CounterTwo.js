import React, { useReducer } from 'react'


// useReducer count with object as initialState, dispatch with payload

const initialState = {
	firstCounter: 0,
	secondCounter: 20
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment1':
			return { ...state, firstCounter: state.firstCounter + action.value }
		case 'decrement1':
			return { ...state, firstCounter: state.firstCounter - action.value }
		case 'increment2':
			return { ...state, secondCounter: state.secondCounter + action.value }
		case 'decrement2':
			return { ...state, secondCounter: state.secondCounter - action.value }
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterTwo() {

// The dispatch(), when called, will get the countState and action
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<section>
				<p>First counter = {count.firstCounter}</p>

				<button onClick={() => dispatch({ type: 'increment1', value: 1 })}>
					Increment
				</button>

				<button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>
					Decrement
				</button>

				<button onClick={() => dispatch({ type: 'increment1', value: 5 })}>
					Increment 5
				</button>

				<button onClick={() => dispatch({ type: 'decrement1', value: 5 })}>
					Decrement 5
				</button>
			</section>

			<section>
				<p>Secound Counter = {count.secondCounter}</p>
					
					<button onClick={() => dispatch({ type: 'increment2', value: 1 })}>
						Increment
					</button>

					<button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>
						Decrement
					</button>
			</section>

			<section>
				<p>Reset</p>
				<button onClick={() => dispatch({ type: 'reset' })}>Reset all</button>
			</section>

		</>
	)
}

export default CounterTwo
