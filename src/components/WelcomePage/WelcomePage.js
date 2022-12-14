import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React from 'react'
import { useSelector } from 'react-redux'
import Logout from '../Login/Logout'

function WelcomePage(props) {
  const userData = useSelector((state)=>state.auth.userData)
  const data = userData.data.data
  // const data =  props
  debugger
  return (
    <div>

      <div ><Logout/></div>
      <p><h1>Welcome {userData.data.data.full_name}</h1></p>
      <ul>
        <li> Name : {data.full_name}</li>
        <li> Email : {data.email}</li>
        <li> Uid : {data.uid}</li>
      </ul>
    </div>
  )
}

export default WelcomePage