import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterOne() {
	const [count, increment, decrement, reset] = useCounter(0, 1)

	return (
		<>
			<p>Count = {count}</p>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</>
	)
}

export default CounterOne
