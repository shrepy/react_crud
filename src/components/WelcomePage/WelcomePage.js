import React from 'react'
import { useSelector } from 'react-redux'
import Logout from '../Login/Logout'

function WelcomePage() {
  const userData = useSelector((state)=>state.auth.userData)
  debugger
  return (
    <div>

      <div ><Logout/></div>
      <p><h1>Welcome {userData.data.data.full_name}</h1></p>
    </div>
  )
}

export default WelcomePage