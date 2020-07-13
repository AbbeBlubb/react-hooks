import React from 'react'
import ComponentD from './ComponentD'

function ComponentB() {
	return (
		<>
			<p>ComponentB, renders ComponentD:</p>
			<ComponentD />
		</>
	)
}

export default ComponentB
