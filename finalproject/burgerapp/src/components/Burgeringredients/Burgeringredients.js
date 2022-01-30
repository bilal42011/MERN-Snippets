import React from "react";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Burgeringredients.css";

const Burgeringredients=(props)=>{
let updatedingredients=Object.keys(props.ingredients)
    .reduce((
        (array,ingredient)=>{
        for(let i=0;i<props.ingredients[ingredient];i++){
            array.push(ingredient);
        }            
        return array;
    }),[])
    .map(
        (ingredient,index)=>{
return <Ingredient type={ingredient} key={index}/>
    });
if(updatedingredients.length===0){
    updatedingredients=<p style={{textAlign:"center",fontWeight:"bolder"}}>Please Insert some Ingredients</p>
}
return <div className={classes.containeringredients}>
<Ingredient type="breadtop"></Ingredient>
{updatedingredients}
<Ingredient type="breadbottom"></Ingredient>
<br/>
</div>
}
export default Burgeringredients;