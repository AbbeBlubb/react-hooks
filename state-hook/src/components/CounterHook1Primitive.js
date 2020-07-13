import React, {useState} from 'react'

// useState with primitive
function CounterHook1Primitive() {

  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </>
  )
}

export default CounterHook1Primitive
