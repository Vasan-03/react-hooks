import React, { useState } from 'react'

const State = () => {
    const[count,setcount]=useState(0)
    const[info,setinfo]=useState("")
  return (
   <>
   <h1>{count}</h1>
   <button onClick={()=>setcount(count+1)}>count incre</button>
   <br></br>
   <input type="text" value={info} onChange={(event)=>setinfo(event.target.value)}/>
   <h1>{info}</h1>
   </>
  )
}

export default State