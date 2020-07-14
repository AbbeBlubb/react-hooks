import React, { useRef, useEffect } from 'react'

function FocusInput() {

	// Create the reference var with useRef with an initial value
	const inputRef = useRef(null)

	// Mimic the componentDidMount behaviour, as the focus is needed only once, after mount
	// Arg 1: arrow func. Arg 2: deps
	// When mounted, set focus with the ref
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	// Attach the ref to the desired element
	return (
		<div>
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput
