import React from "react";
import classes from "./Ordersummary.css";
const Ordersummary=(props)=>{
const ingredientlist=[];
let id=0;
for(const [key,value] of Object.entries(props.ingredients)){
ingredientlist.push(<p key={id}>{key.toUpperCase()} : {value}</p>);
id++;
}
return <div className={classes.ordersummary}>
        <p><strong>Order Summary</strong></p>
        <div>
            {ingredientlist}
            </div>
        <div>
        <button onClick={props.cancelorder}>Cancel</button>
        <button onClick={props.continueorder}>Continue</button>
    </div>
    </div>
}
export default Ordersummary;