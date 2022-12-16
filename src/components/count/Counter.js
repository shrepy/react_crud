import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import {authActions}  from '../../store/authSlice'
import { pageActions } from '../../store/loginSignupPage'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [amount, setamount] = useState(0)
    // const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(authActions.logout())
    },[])
  return (
    <>
    {/* <button onClick={()=>navigate('')}>Go To main page</button> */}
    {/* <h1>Counter</h1> */}
    <h2>{count}</h2>
    <input 
      type="number"
      name='amount'
      value={amount}
      onChange={(e)=>setamount(parseInt(e.target.value))}
    />
    <button onClick={()=>{setCount(count+amount)}}>Set Count</button>
    <button onClick={()=>{setCount(count+1)}}>Increment</button>
    <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </>
  )
}

export default Counter