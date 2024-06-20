import React, { useContext } from 'react'
import { GreetContext} from './A'



export default function C() {
    const useCon = useContext(GreetContext);
    //const useCon2 = useContext(GreetContext2);
  return (
    <h3>Greet: {useCon.greet} {useCon.greet2}</h3>
  )
}

/*
    <GreetContext.Consumer>
    {
        (value)=>{
            return <h2>Greet from A : {value}</h2>
        }

    }
    </GreetContext.Consumer>
    */