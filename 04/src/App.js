import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0);

  const inc = ()=>{
    setCount(count+1);
  }
  
  const dec = ()=>{
    setCount(count-1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <br/>
      <button onClick={dec}>-</button>
      
    </div>
  )
}

export default App

