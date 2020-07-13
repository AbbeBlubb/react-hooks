import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

/** 
 * --Rerendering-- Why not write all code in one file? Because of optimization/performance in this case.
 * Each componenet has a console.log, so you know when the component has rerendered.
 * Normally -all- child components rerender when one peice of state in p arent component changes (here vars age and salary).
 * Not a problem in this small case, but if the file would have lots of components, it could be a performance issue.
 * Ideally only the affected comonent should re-render: if age changes, then only Count for age should re-render.
 * 
 * --React.memo-- (not a hook): wrap the child component export in React.memo(Component), and the component will rerender only when the props recieved or it's own state changes.
 * If click on increment age button, rerender triggers on: Count for salary, and both buttons. No rerender on Title.
 * Why? Each time parent component rerenders, new functions are created. The increment salary button cb function is a different function before and after rerender. 
 * Reference equality: the reference to the function has changed -> inequality -> component that recieves the fucntion as cb through props rerenders.
 * 
 * --useCallback-- hook: returns a memoized version of the cb func.
 * The function only changes (is created again) if one of it's dependencies has changed (thus mantaining the same reference if the dependencies are the same).
 * Useful when passing cbs to child components that rely on reference equality. To prevent unnecessary renders.
 *  
*/



function ParentComponent() {

	const [age, setAge] = useState(25) // For Count component
	const [salary, setSalary] = useState(30000)

	// Wrap funcion in useCallback to recieve a memoized / "cached" version of the function that will change only if the cb's dep changes
	const incrementAge = useCallback(() => {
		setAge(age + 1) // Eg: 25+1=26.
	}, [age]) // If 'age' changes, the function is created again -> new reference -> Button component rerenders

	// Wrap funcion in useCallback to recieve a memoized / "cached" version of the function that will change only if the cb's dep changes
	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000) // Eg: 30000+1000=31000.
	}, [salary]) // If 'salary' changes, the function is created again -> new reference -> Button component rerenders

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
