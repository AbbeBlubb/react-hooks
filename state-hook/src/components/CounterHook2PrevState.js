import React, { useState } from 'react'

// prevState with function in setter, initialCount
function CounterHook2PrevState() {
	const initialCount = 0
	const [count, setCount] = useState(initialCount)

	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			setCount(prevCount => prevCount + 1)
		}
	}

	return (
		<>
			Count: {count} &nbsp;
			<button onClick={() => setCount(initialCount)}>
				Reset
			</button>

			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>

			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>

			<button onClick={incrementFive}>
				Increment 5
			</button>
		</>
	)
}

export default CounterHook2PrevState
