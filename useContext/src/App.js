import React from 'react'
import './App.css'
import ComponentC from './components/ComponentC'
import ComponentF from './components/ComponentF'

export const UserContext = React.createContext()
export const CityContext = React.createContext()

function App() {
	return (
		<div className="App">
			<h2>App.js creates 2 contexts</h2>
			<hr style={{ width: '30%'}}/>

			<UserContext.Provider value={'UserName'}>
        <CityContext.Provider value={'Stockholm'}>
					<ComponentC />
					<hr style={{ width: '30%'}}/>

					<ComponentF />
					<hr style={{ width: '30%'}}/>
				</CityContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App
