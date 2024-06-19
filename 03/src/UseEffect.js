import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    // This effect runs once after the initial render
    useEffect(()=>{
        alert("We are using useEffect")
    },)// This effect runs once after the initial render

const [clicked, setClicked] = useState()
const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={()=> setClicked("Subscribe")}>Subscribe</button>
      <br/>
      <hr/>
      <button onClick={()=> setClicked("To")}>To</button>
      <br/>
      <hr/>
      <button onClick={()=> setClicked("Aniket")}>Aniket</button>
      <h1>{clicked}</h1>
      <br/>
      <hr/>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <h1>{count}</h1>
    </div>
  )
}

export default UseEffect

/*
useEffect is a hook in React that allows you to 
perform side effects in function components.
Side effects can include data fetching, 
direct DOM manipulation, timers, and subscriptions.
*/

/*
Parameters:-

1. Effect Function: This is the function you want to run as a side effect.
2. Dependency Array: An optional array that specifies the dependencies of the effect. 
                    The effect will only re-run if one of these dependencies changes.
*/
