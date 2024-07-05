import React ,{useState,useEffect}from 'react'

const Eff = () => {
    const[count,setcount]=useState(0)
    const[number,setnumber]=useState(0)
    useEffect(()=>{setnumber(number+1)},[count])
    
  return (
   <>
   <button onClick={()=>setcount(count+1)}>click me</button>
   <h1>{count} and {number}</h1>
   </>
  )
}

export default Eff


// syntax
// useEffect(()=>{},[dependency1,dependency2])