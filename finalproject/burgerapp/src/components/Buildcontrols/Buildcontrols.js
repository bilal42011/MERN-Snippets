import React from "react";
import Buildcontrol from "./Buildcontrol/Buildcontrol";
import classes from "./Buildcontrols.css"
const controlsdata=[
    {name:"Cheese",type:"cheese"},
    {name:"Salad",type:"salad"}, 
    {name:"Meat",type:"meat",},
    {name:"Bacon",type:"bacon"}
];

const Buildcontrols=(props)=>{
return <div>
<div style={{width:"100%",textAlign:"center",marginBottom:"10px"}}>
<h2 className={classes.h2}>$ {props.burgerprice}</h2>
<button className={classes.button} disabled={props.disableorder} onClick={props.showpopup}>Order</button>
</div> 
{controlsdata.
map((currentingredient,index)=>{
return <Buildcontrol name={currentingredient.name} 
addhandler={()=>props.addingredient(currentingredient.type)}
removehandler={()=>props.removeingredient(currentingredient.type)}
disableremovebutton={props.disableremove[currentingredient.type]}
key={index}/>
})
}

</div>

}
export default Buildcontrols;