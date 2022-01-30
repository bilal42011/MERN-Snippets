import React,{useEffect} from "react";
import { useFormContext,Controller,useFormState } from "react-hook-form";
import { TextField } from "@mui/material";
// import { useHistory } from "react-router";

const Step1=()=>{
let {control,formState:{errors},setValue,getValues}=useFormContext();
let {dirtyFields}=useFormState({control});
useEffect(()=>{
    // (dirtyFields.Step1)?setValue("Step1",getValues("Step1")):null;
    console.log("isnide useeffect of step1");
    console.log(dirtyFields);
    console.log(getValues("Step1"));
    });

return <Controller control={control}
name="Step1.name"
rules={{required:"Name is a required field*"}}
render={({field})=>(
    <TextField {...field} 
    label="Name"
    variant="outlined"
    error={errors.Step1}
    helperText={errors.Step1?errors.Step1.name.message:null}/>
)}>

</Controller>

}
export default Step1;