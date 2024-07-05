import React, {  useMemo, useState} from 'react'

function Memo() {
    const[count,setcount]=useState(0)
    const[num,setnum]=useState(0)

    const handleclick=()=>setcount(count+1)
    const handleclick1=()=>setnum(num+1)

  
   const vasan=(num)=>{
     console.log("simple")
     return (num * 4 )}
      
    const x=useMemo(()=>vasan(num),[num])

  
  return (
    <> 
    <h1>{count}</h1>
    <button onClick={handleclick}>count incre</button>
    <h1>{num} and {vasan}  </h1>
    <button onClick={handleclick1}>num incre</button>
    
    </>
  )
}

export default Memo

