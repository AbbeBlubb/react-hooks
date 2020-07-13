import React, {useContext} from 'react'
import { CountContext } from '../App';


function ComponentA() {

  const countContext = useContext(CountContext)

  return (
    <>
      <p>ComponentA, consumes CountContext with useContext hook</p>
      Count in ComponentA: {countContext.countState}<br/>

      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
			<button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
			<button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </>
  )
}

export default ComponentA
