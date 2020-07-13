import React, {useContext} from 'react'
import { CountContext } from '../App';


function ComponentD() {

  const countContext = useContext(CountContext)

  return (
    <>
      <p>ComponentD, consumes CountContext created in App.js with useContext hook</p> 
      Count in ComponentD: {countContext.countState}<br/>

      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </>
  )
}

export default ComponentD
