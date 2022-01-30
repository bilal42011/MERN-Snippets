import React from "react";
import Form from "./Simpleform";
import { useState } from "react";
import { useForm } from "react-hook-form";
import formschema from "./yupschema";
import {yupResolver} from "@hookform/resolvers/yup";
const App=()=>{
let [firstname,setfirstname]=useState("");
    let {register,handleSubmit,watch,formState:{errors}}=useForm({
        resolver:yupResolver(formschema)
    });
const changehandler=(event)=>{
setfirstname(event.target.value);
}

console.log("errors are: ",errors);
let submithandler=data=>{ console.log(data)};
console.log(watch("firstname"));
console.log(watch("lastname"));

return <> 
<form onSubmit={handleSubmit(submithandler)}>

<input type="text" value={firstname}
name="firstsdfname" 
{...register("firstname")}
onChange={changehandler}></input>
{errors.firstname && <span>{errors.firstname.message}</span>}
<input type="text"  name="lastname" {...register("lastname")}></input>
{errors.lastname && <span>{errors.lastname.message}</span>}
<input type="submit"></input>
</form>
<br/>
<br/>
<Form/>
</>
} 
export default App;
