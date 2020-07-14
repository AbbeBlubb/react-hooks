import React, {useState, useEffect} from 'react'

function IntervalHook() {

  const [count, setCount] = useState(0)

  const tick = () => {
    setCount(count + 1)
  }

  useEffect(() => {
    // Start the inerval on 1 sek
    const interval = setInterval(tick, 1000)

    // Return function for unmount
    return () => {
      clearInterval(interval)
    }
  }, [count]) // Depend on count, else there will be no update
  
  return (
    <>
      {count}
    </>
  )
}

export default IntervalHook
