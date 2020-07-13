import React, { useState, useEffect } from 'react'

// useEffect dependency array=[] -> will never re-run
// Because of listeners, useEffect is not needed to re-run
// Remove listener on unmount with return statement in useEffect hook
function MousemoveHook() {

	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log('MousemoveHook: useFffect called')
    window.addEventListener('mousemove', logMousePosition)

    return () => {
      console.log('MousemoveHook: component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
	}, [])

	return (
		<>
			X - {x} <br/> 
			Y - {y}
		</>
	)
}

export default MousemoveHook
