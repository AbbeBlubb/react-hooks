import React, {useContext} from 'react'
import { CountContext } from '../App';

function ComponentF() {

  const countContext = useContext(CountContext)

  return (
    <>
      <p>ComponentF, consumes CountContext created in App.js</p> 
      Count in ComponentF: {countContext.countState}<br/>

      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </>
  )
}

export default ComponentF
