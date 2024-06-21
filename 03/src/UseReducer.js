import React, { useReducer, useState } from 'react'

const reducer = (state, action)=>{
    console.log(state, action); //values from dispatch are in action

    if(action.type === 'incr'){
        return {count: state.count + 1};
    }
    if(action.type === 'decr'){
        return {count: state.count - 1};
    }
}

export default function UseReducer() {

    // const [count, setcount]= useState(2);
    // console.log(count);
    // console.log(setcount);

    const [state, dispatch] = useReducer(reducer, {count : 0});

    //reducer function
    //pure function - same output for the same input,does not modify any state outside of its scope,does not perform any I/O operations.
    //state and action

    const handleclickInc = ()=>{
        dispatch({type : "incr"}) ; //triggers the action method
    }
    const handleclickDec = ()=>{
        dispatch({type : "decr"}) ; //triggers the action method
    }

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={handleclickInc}>+</button>
      <button onClick={handleclickDec}>-</button>
    </div>
  )
}
