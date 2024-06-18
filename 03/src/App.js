import React, { useState } from 'react'

export default function App() {
    const [count, setcount]= useState(2);
    console.log(count);
    console.log(setcount);
    const handleclickInc = ()=>{
        setcount(count+1) ;
    }
    const handleclickDec = ()=>{
        setcount(count-1);
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleclickInc}>+</button>
      <button onClick={handleclickDec}>-</button>
    </div>
  )
}
