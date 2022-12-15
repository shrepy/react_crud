import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [amount, setamount] = useState(0)
    // const navigate = useNavigate()

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