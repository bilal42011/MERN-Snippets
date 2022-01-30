import React,{useState} from "react";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./Contact.css";
import axios from "../../axiosorders";
import Input from "../../components/Input/Input";
import orderformschema from "../../Validations/Orderformvalidation";
const Contact=(props)=> {
const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(orderformschema)
});
    console.log(errors);
    console.log(register);
let [orderform,setorderform]=useState({
    name:{
     inputtype:"input",
     config:{
    type:"text",
    placeholder:"Enter Name"
    },
     value:""
    },
    email:{
        inputtype:"input",
        config:{
       type:"email",
       placeholder:"Enter email"
       },
        value:""
       },
    delivery:{
        inputtype:"select",
        config:{
       type:"email",
       placeholder:"Enter email",
       options:[
           {name:"Fast",value:"fast"},
           {name:"Slow",value:"slow"}]
       },
        value:""
       } }  );
    let [loader,setloader]=useState(false);

const Orderhandler=(data)=>{
        setloader(prevstate=>{ return !prevstate.loader });

     data={
        ingredients:props.ingredients,
        price:props.price,
        ...data
    };
    console.log(data);
    axios.post("/orders.json",data)
    .then(response=>{
        console.log(response);
        console.log("request made");
        setloader(prevstate=>{
            return !prevstate.loader;
        });
        props.history.push("/");
    }).catch(err=>{
        console.log("something went wrong", err);
        setloader(prevstate=>{
            return !prevstate.loader;
        });
    });    
}

const Onchangehandler=(event,id)=>{
    event.preventDefault();
    console.log("inside on change handler");
let neworderform={...orderform};
let newelement={...orderform[id]};
newelement.value=event.target.value;
neworderform[id]=newelement;
setorderform(neworderform);
}


let orderelements=[];
for(let orderelement in orderform ){
orderelements.push({
...orderform[orderelement],
id:orderelement
});
}
let inputelements=orderelements.map(
    inputelement=>(
   <Input key={inputelement.id} 
   inputtype={inputelement.inputtype}
    config={inputelement.config}
    value={inputelement.value}
    change={(event=>Onchangehandler(event,inputelement.id))}
    Register={register}
    name={inputelement.id}
    errors={errors}/>)
);
return (loader)?<Spinner/>:
    <>
    <h2 style={{textAlign:"center",marginTop:"40px"}}>Fill Form to Proceed Order</h2>
    <div className={classes.contactform}>
        <form onSubmit={handleSubmit(Orderhandler)}>
{inputelements}
<button type="submit" className={classes.ordersbutton}>Order</button>
</form>

    </div>
    </> 

}
export default Contact;