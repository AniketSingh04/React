import React from 'react';
import MobileList from './MobileList';
import mobiles from "./Mobiles.json";

//MobileList k content use krne k liye use yha import kr render krwao
export default function Mobile() {
  return (
    <div>
        {
            mobiles.map((ele)=>{
                return <MobileList
                 image = {ele.image} 
                 title={ele.title} 
                 price={ele.price}/>
            })
        }
        
    </div>
  )
}
