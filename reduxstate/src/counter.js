import React from "react";
import Name from "./name";
import { useSelector,useDispatch } from "react-redux";


const Counter=(props)=>{
let counter=useSelector(state=>state.counter);
let dispatch=useDispatch();
return  <>
<div>Counter: {counter}</div>
<button onClick={()=>dispatch({type:"inc"})}>Incrment</button>
<Name/>
</>
}
export default Counter;