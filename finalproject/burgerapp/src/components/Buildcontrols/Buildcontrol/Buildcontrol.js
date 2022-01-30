import { checkPropTypes } from "prop-types";
import React from "react";
import classes from "./Buildcontrol.css";
const Buildcontrol=(props)=>{

    return <div className={classes.buildcontrol}>
   <p className={classes.p} style={{fontWeight:"bolder",flexBasis:"50%"}}>For adding {props.name} Tap the button</p>
   <div className={classes.buttondiv}>
   <button className={classes.button} onClick={props.addhandler}>Add</button>
   <button className={classes.button} onClick={props.removehandler} 
   disabled={props.disableremovebutton}>Remove</button>
   </div>
    </div>

}
export default Buildcontrol;