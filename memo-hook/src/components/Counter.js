import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    let i = 0
    while (i < 2000000000) i++
    return counterOne % 2 === 0
  }, [counterOne])

	return (
		<>
			<div>
				<h3>Counter1</h3>
				<p>Uses a useMemo hook with function with extreme long loop, listens to counterOne var</p>
        		Count: {counterOne}<br/>
        		Even or odd: {isEven ? 'Even' : 'Odd'}<br/>
				<button onClick={incrementOne}>Add 1</button>
			</div>

			<div>
				<h3>Counter2</h3>
				<p>In same component as Counter1</p>
				Count: {counterTwo}<br/>
        		<button onClick={incrementTwo}>Add 2</button>
			</div>
		</>
	)
}

export default Counter
