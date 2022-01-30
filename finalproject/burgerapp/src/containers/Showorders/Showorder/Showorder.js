import React from "react";
import classes from "./Showorder.css";

const Showorder=(props)=>{
let newingredients=[];
console.log(props.ingredients);
for(const [ingredient,amount] of Object.entries(props.ingredients)){
newingredients.push({
   name:ingredient,
   amount:amount
});
}
newingredients=newingredients.map((ingredient,index)=>{
    return <p key={index}> {ingredient.name}: {ingredient.amount} </p>
    });
return <div className={classes.order}>
    <div>
{newingredients}
</div>
<p>Price is: ${props.price}</p>
<p>Client is: {props.client}</p>
<p>Delivery is: {props.delivery}</p>
</div>
}
export default Showorder;