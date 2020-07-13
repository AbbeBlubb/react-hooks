import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

/** 
 * Why not write all code in one file? Because of optimization/performance in this case.
 * Each componenet has a console.log, so you know when the component has rerendered.
 * Normally, -all- components re-render when one peice of state in ParentComponent changes (age or salary)
 * Not a problem in this case, but if the file would have lots of components, it would be a performance issue.
 * Ideally only the affected comonent should re-render: if age changes, then only Count for age should re-render.
 * 
 * React.memo (not a hook): wrap the export in React.memo(Component), and the component will rerender only when it's recieved props or it's own state changes.
 * If click on increment age button, rerender triggers on: Count for salary, and both buttons. No rerender on Title.
 * Why? Each time parent component rerenders, new functions are created. The increment salary button callback function is a different function before and after rerender. 
 * Reference equality: the reference to the function has changed -> inequality -> component that recieves the fucntion as callback through props rerenders
 * 
 * useCallback hook: returns a memoized version of the cb func. The function only changes if onen of it's dependencies has changed.
 * Useful when passing cbs to child components that rely on reference equality. To prevent unnecessary renders.
 * 
 * 
*/



function ParentComponent() {

	const [age, setAge] = useState(25) // For Count component
	const [salary, setSalary] = useState(30000)

	// Wrap funcion in useCallback to recieve a memoized / "cached" version of the function that will change only if the cb's dep changes
	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	// Wrap funcion in useCallback to recieve a memoized / "cached" version of the function that will change only if the cb's dep changes
	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<>
			<Title />

			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>
				Increment Age
			</Button>
			
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>
				Increment Salary
			</Button>
		</>
	)
}

export default ParentComponent
