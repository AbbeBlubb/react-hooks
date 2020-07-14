import React, { useState } from 'react'

// useState with object, spread operator
function CounterHook3Object() {

	const [name, setName] = useState({ firstName: '', lastName: '' })

	return (
		<form>

			<input
				type="text"
				value={name.firstName}
				onChange={e => setName({ ...name, firstName: e.target.value })}
			/>

			<input
				type="text"
				value={name.lastName}
				onChange={e => setName({ ...name, lastName: e.target.value })}
			/>

			<p>
				Your first name is - {name.firstName}
				<br/>
				Your last name is - {name.lastName}
			</p>

			{/* Objects are not valid as a React child */}
			<p>
				{JSON.stringify(name)}
			</p>

		</form>
	)
}

export default CounterHook3Object
