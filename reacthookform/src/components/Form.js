import React from  "react";
import { FormProvider,useForm } from "react-hook-form";
import { Button,Container } from "@mui/material";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { incrementstep,decrementstep } from "../reduxstate";
import { useSelector,useDispatch } from "react-redux";

const Form=()=>{
    let step=useSelector((state)=>state);
    console.log(step);
    let dispatch=useDispatch();
let methods=useForm({mode:"onTouched"});
const onSubmithandler=(data)=>{
    if(!methods.formState.errors["Step"+step]){
        console.log("inside if");
        if(step!=2){
                dispatch(incrementstep());
        }
            }
        }
    else{        
    console.log(data);
    }
}
console.log(methods.formState.errors);
console.log(methods.formState.dirtyFields);
let currentstep=null;
switch(step){
case 1:
    currentstep=<Step1/>
    break;
    case 2:
        currentstep=<Step2/>
        break;
        default:
            currentstep=<Step1/>
}

const Nextstephandler=()=>{
    console.log("inside nextstephandler");
}
const previousstephandler=()=>{
    if(step!=1)dispatch(decrementstep());
}
return <Container> 
    <FormProvider {...methods}>
<form onSubmit={methods.handleSubmit(onSubmithandler)}>
{currentstep}
{(step==6)?
    <Button sx={{marginTop:"10px"}} variant="outlined" color="secondary" type="submit">Submit</Button>
:<>
<Button type="submit" sx={{marginTop:"10px"}} variant="outlined" color="secondary">Next</Button>
<Button onClick={previousstephandler} sx={{marginTop:"10px",marginLeft:"10x"}} variant="outlined" color="secondary">Previous</Button>
</>
}
</form>
        </FormProvider>
        </Container>

}
export default Form;