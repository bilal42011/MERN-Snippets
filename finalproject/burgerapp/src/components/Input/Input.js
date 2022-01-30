import React from "react";

const Input=(props)=>{
let inputelement=null;
switch(props.inputtype){
case "input":
inputelement=<input {...props.config} 
{...props.Register(props.name)}
value={props.value}
onChange={props.change}/>;
break; 
case "select":
    inputelement=<>
    <label style={{fontWeight:"bolder",color:"white"}}>Delivry Method:  </label>
    <select {...props.config} 
 {...props.Register(props.name)}
 value={props.value}
onChange={props.change}>
        <option></option>
        {props.config.options.map((option,index)=>(
            <option key={index} value={option.value}>{option.name}</option>
           ))
}
    </select></>
break;
default:
    <input {...props.config} value={props.value} onChange={props.change}/>
}
let name=props.name;
return <> 
{inputelement}
{props.errors[name]?<p>{props.errors[name].message}</p>:null}
</>
}
export default Input;