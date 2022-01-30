import React, { useState ,useEffect} from "react";
import {useForm} from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import { signupstep4 } from "../../../ReduxSlices/signupslice";
import { useHistory } from "react-router";

const Step4=()=>{
    let signupdata=useSelector(state=>state.signupdata);
    let [zipcode,setzipcode]=useState("");
    let history=useHistory();
    const dispatch=useDispatch();
    let {register,handleSubmit,formState:{errors},watch,setValue}=useForm({
        reValidateMode:"onChange",
        defaultValues:{
            zipcode        
        }
    });
    console.log(watch("zipcode"));
console.log("hello");
    useEffect(()=>{
        console.log("inside useeffect of step 2");
    if(signupdata.step4.isvalid){
        console.log("inside if");
        setValue("zipcode",signupdata.step4.email);
    }
else if(!signupdata.step4.isvalid){
    console.log("inside else if");
let incompletestep="";
const currentstep="step4";
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
    setzipcode(event.target.value);
    }
    const Previousstephandler=()=>{
        history.push("/signupstep3");
    }
    const step4submithandler=(data)=>{
dispatch(signupstep4(data.zipcode));
history.push("/signupresult");    
}
return <div>
    <form onSubmit={handleSubmit(step4submithandler)}>
    <label>Zipcode</label>
    <input type="text" {...register("zipcode",{required:"Enter Zip code",
    minLength:{value:5,message:"Atleast 5 numbers allowed"},
    maxLength:{value:5,message:"AtMost 5 numbers allowed"},
    pattern:{value:/^\d+$/,message:"Sorry only numbers (0-9) are allowed"}})}></input>
    {errors.zipcode?<p>{errors.zipcode.message}</p>:null}
    <button type="submit">Submit</button>
    <button type="button" onClick={Previousstephandler}>Previous</button>
    </form>
</div>
}
export default Step4;