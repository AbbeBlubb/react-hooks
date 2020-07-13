import React, { useState } from 'react'

// useState with array, spread operator
function CounterHook4Array() {

	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([
			...items,
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1
			}
		])
	}

	return (
		<>

			<button onClick={addItem}>Add a number</button>

			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>

		</>
	)
}

export default CounterHook4Array
