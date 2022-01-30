import React from "react";
import Burgeringredients from "../../../components/Burgeringredients/Burgeringredients";
import classes  from "./Orders.css";

const Orders=(props)=>{
return <>
<h1 style={{textAlign:"center"}}>Checkout Delecious Burger</h1>
<Burgeringredients ingredients={props.ingredients}/>
<div className={classes.orders}>
<h2>Price is: $ {props.price}</h2>
 <button onClick={props.cancel} className={classes.ordersbutton}>Cancel</button>
 <button onClick={props.continue} className={classes.ordersbutton}>Continue</button>
 </div>
</>


}
export default Orders;