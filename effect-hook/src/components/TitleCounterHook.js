import React, { useState, useEffect } from 'react'

// Conditionally firing an effekt: effect hook listens to count var
function TitleCounterHook() {

	const [count, setCount] = useState(0)
	const [name, setName] = useState('')

	useEffect(() => {
		console.log('useEffect in TitleCounterHook - mounted or updating document title ')
		document.title = `Hook: clicked ${count} times`
	}, [count])

	return (
		<>
			<input type="text" value={name} onChange={e => setName(e.target.value)} /> Input: {name} <br/>

			<button onClick={() => setCount(count + 1)}>
				Clicked {count} times
			</button>
		</>
	)
}

export default TitleCounterHook
