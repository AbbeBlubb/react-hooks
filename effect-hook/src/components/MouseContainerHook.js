import React, { useState } from 'react'
import HookMouse from './MousemoveHook'

function MouseContainerHook() {

	const [display, setDisplay] = useState(true)

	return (
		<>
			<button onClick={() => setDisplay(!display)}>Toggle display</button> <br/>
			{display && <HookMouse />}
		</>
	)
}

export default MouseContainerHook
