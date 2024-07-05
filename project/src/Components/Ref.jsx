import React, { useEffect, useRef, useState} from 'react'

const Ref = () => {
    const[number,setnumber]=useState("v")
    const userref=useRef("initial value")
     
   
    useEffect(()=>{
        userref.current=number
        console.log(userref.current)
    },[number]) 
   
  return (
   <>
   <input type="text" onChange={(event)=>setnumber(event.target.value)} />
   <h1>{number}</h1>
   <h1>{userref.current}</h1>
   </>
  )
}

export default Ref;