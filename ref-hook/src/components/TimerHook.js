import React, {useState, useEffect, useRef} from 'react'

function TimerHook() {

  const [timer, setTimer] = useState(0)
  const intervalRef = useRef()

  // Return function that clears timer when unmount
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, []) // Listen to nothing - will run only on mount

  return (
    <>
      Timer with setInterval<br/>
      Uses useRef for reference to the created setInterval var<br/>
      useRef holds immutable value (the setInterval var)<br/>
      - {timer} - <br/>
      (Instead of declaring setInterval var outside the hook and using useState)<br/>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear interval in timer</button>
    </>
  )
}

export default TimerHook
