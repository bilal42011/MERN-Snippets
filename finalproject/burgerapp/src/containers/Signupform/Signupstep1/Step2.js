import React, { useState ,useEffect} from "react";
import {useForm} from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { signupstep2 } from "../../../ReduxSlices/signupslice";
import { useHistory } from "react-router";
import step2schema from "../../../Validations/Signupvalidations/step2validation";
import { yupResolver } from "@hookform/resolvers/yup";

const Step2=()=>{
    let signupdata=useSelector(state=>state.signupdata);
    let [email,setemail]=useState("");
    let history=useHistory();
    const dispatch=useDispatch();
    let {register,handleSubmit,formState:{errors},watch,setValue}=useForm({
        resolver:yupResolver(step2schema),
        criteriaMode:"all",
        mode:"onTouched",
        defaultValues:{
            email
        }
    });
    console.log(errors);
    useEffect(()=>{
        console.log("inside useeffect of step 2");
    if(signupdata.step2.isvalid){
        console.log("inside if");
        setValue("email",signupdata.step2.email);
    }
else if(!signupdata.step2.isvalid){
    console.log("inside else if");
let incompletestep="";
const currentstep="step2";
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
    setemail(event.target.value);
    }
    const Previousstephandler=()=>{
        history.push("/signupstep1");
    }
    const step2submithandler=(data)=>{
dispatch(signupstep2(data.email));
history.push("/signupstep3");    
}
return <div>
    <form onSubmit={handleSubmit(step2submithandler)}>
    <label>Email</label>
    <input type="text" {...register("email")}></input>
    {errors.email?(errors.email.types.required?<p>{errors.email.types.required}</p>:null):null}
    {errors.email?(Array.isArray(errors.email.types.matches[0]) && errors.email.types.matches[0]?<p>{errors.email.types.matches[0]}</p>:null):null}
    {errors.email?(errors.email.types.matches[1]?<p>{errors.email.types.matches[1]}</p>:null):null}
    <button type="submit">Next</button>
    <button type="button" onClick={Previousstephandler}>Previous</button>
    </form>
</div>
}
export default Step2;