import React, {useState, useReducer} from 'react'
import { reducer, initialState } from './reducer'

const Footer = () => {
  let [data, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='h-60 bg-slate-900 text-white'>
        <h2>{data.str} </h2>
        <button>Uzbek</button>
        <button>English</button>
        <br />
        <h2>{data.son}</h2>
        <button onClick={()=> dispatch({type: "INC", payload: 1})}>Increment</button>
        <button onClick={()=> dispatch({type: "INC", payload: 10})}>Increment 10</button>
        <button disabled={data.son <= 0} onClick={()=> dispatch({type: "DEC"})}>Decrement</button>
    </div>
  )
}

export default Footer