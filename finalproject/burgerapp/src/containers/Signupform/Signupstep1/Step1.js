import React, { useState , useEffect} from "react";
import {useForm} from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { signupstep1 } from "../../../ReduxSlices/signupslice";
import { useHistory } from "react-router";
import step1schema from "../../../Validations/Signupvalidations/step1validation";
import { yupResolver } from "@hookform/resolvers/yup";

const Step1=(props)=>{
    let signupdata=useSelector(state=>state.signupdata);
    console.log(signupdata.step1.isvalid);
    let [name,setname]=useState("");
    console.log("name is: "+name);
    const dispatch=useDispatch();
    let history=useHistory();
    let {register,handleSubmit,formState:{errors},watch,setValue}=useForm({
        criteriaMode:"all",
        mode:"onTouched",
        resolver:yupResolver(step1schema),
        defaultValues:{
            name
        },
        shouldUnregister:true
    });
    // console.log(watch("name"));
    useEffect(()=>{
        console.log("inside use effect hook of step 1")
        if(signupdata.step1.isvalid){
            console.log("inside useefect if");
            setValue("name",signupdata.step1.name);
            console.log("inside after setname useeffect if");
        }
    },[]); 
    
    const Onchangehandler=(event)=>{
    setname(event.target.value);
    }

    const step1submithandler=(data)=>{
dispatch(signupstep1(data.name));
history.push("/signupstep2");    
}
console.log(errors.name);
return <div>
    <form onSubmit={handleSubmit(step1submithandler)}>
    <label>Name</label>
    <input type="text" {...register("name")}></input>
    {errors.name?(errors.name.types.required?<p>{errors.name.types.required}</p>:null):null}
    {errors.name?(errors.name.types.matches?<p>{errors.name.types.matches}</p>:null):null}
    {errors.name?(errors.name.types.min?<p>{errors.name.types.min}</p>:null):null}
    <button type="submit">Next</button>
    </form>
</div>
}
export default Step1;