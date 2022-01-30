import React ,{useEffect} from "react";
import { useFormContext,Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { useHistory,useLocation } from "react-router";

const Step2=()=>{
let {control,formState:{errors,dirtyFields},setValue,getValues}=useFormContext();
let history=useHistory();
let location=useLocation();
useEffect(()=>{
    //     if(dirtyFields.Step2){
    // setValue("Step2",getValues("Step2"));
    //     }
    //     else{
    // for (let step in dirtyFields){
    // if(dirtyFields[step]==false || errors.step){
    // history.push("/signup/"+step);
    // break;
    // }
    // }
    //     }
   },[]);
    

return <Controller control={control}
name="Step2.email"
rules={{required:true}}
render={({field})=>(
    <TextField {...field} 
    sx={{marginTop:"10px"}}
    label="Email"
    variant="outlined"
    error={errors.Step2}
    helperText={errors.Step2?errors.Step2.email.message:null}/>
)}>
</Controller>
}

export default Step2;