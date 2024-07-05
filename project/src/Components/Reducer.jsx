import React, { useReducer } from 'react'

const reducerfunction=(state,action)=>{
    switch (action.type) {
        case 'plus':
            return{count: state.count +1}
        case 'minus': 
             return{count: state.count-1}   
        default:
             return state 
             
    }
  
}
const Reducer = () => {
    const[state,dispatch]=useReducer(reducerfunction,{count:1})
  return (
   <>
   <button onClick={()=>dispatch({type:'plus'})}>plus</button>
   <h1>{state.count}</h1>
   <button onClick={()=>dispatch({type:'minus'})}>minus</button>
   </>
  )
}

export default Reducer