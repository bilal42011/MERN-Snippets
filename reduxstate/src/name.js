import React from "react";
import { useSelector,useDispatch } from "react-redux";
const Name=(props)=>{
    let counter=useSelector(state=>state.counter);
return <>
<p>{counter}</p>
</>
}
export default Name;