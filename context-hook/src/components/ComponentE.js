import React, { useContext } from 'react'
import { UserContext, CityContext } from '../App'

function ComponentE() {

  // Get the contexts into vars
  const user = useContext(UserContext)
  const city = useContext(CityContext)

  return(
    <>
      <p>ComponentE, uses useContext hook:</p>
      <p>User is {user} and city is {city}</p>
    </>
  )
}

export default ComponentE
