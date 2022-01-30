import React, { useState ,useEffect} from "react";
import {useForm} from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { signupstep3 } from "../../../ReduxSlices/signupslice";
import { useHistory } from "react-router";

const Step3=()=>{
    let signupdata=useSelector(state=>state.signupdata);
    let [password,setepassword]=useState("");
    let history=useHistory();
    const dispatch=useDispatch();
    let {register,handleSubmit,formState:{errors},watch,setValue,getValues}=useForm({
        criteriaMode:"all",
        mode:"onTouched",
        defaultValues:{
        password,
        confirmpassword:""
        }
    });
    
    useEffect(()=>{
        console.log("inside useeffect of step 3");
    if(signupdata.step3.isvalid){
        console.log("inside if");
        setValue("password",signupdata.step3.password);
        setValue("confirmpassword",signupdata.step3.password);
    }
else if(!signupdata.step3.isvalid){
    console.log("inside else if");
let incompletestep="";
const currentstep="step3";
    for (let step in signupdata){
    if(!signupdata[step].isvalid){
        incompletestep=step;
        break;
    }
}
if(incompletestep!=currentstep) history.push("/signup"+incompletestep);
} 
    },[]);

    const Onchangehandler=(event)=>{
    setepassword(event.target.value);
    }
    const Previousstephandler=()=>{
        history.push("/signupstep2");
    }
    const step3submithandler=(data)=>{
dispatch(signupstep3(data.password));
history.push("/signupstep4");    
}
console.log(errors);
return <div>
    <form onSubmit={handleSubmit(step3submithandler)}>
    
    <label>Password</label>
    <input type="Password" 
    {...register("password",{required:"password must be provided",
    maxLength:{value:18,message:"Atmost 18 characters are allowed"},
    pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    message:"- at least 8 characters- must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number- Can contain special characters"}})} ></input>
    {errors.password?(errors.password.types.required?<p>{errors.password.types.required}</p>:null):null}
    
    <label>Repeat Password</label>
    <input type="Password" {...register("confirmpassword",{required:"Repeat the Password",
    validate:val=>val===getValues("password")||"Password didn't Match"})} ></input>
    {errors.confirmpassword?<p>{errors.confirmpassword.message}</p>:null}
    <button type="submit">Next</button>
    <button type="button" onClick={Previousstephandler}>Previous</button>
    </form>
</div>
}
export default Step3;