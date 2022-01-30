import React from "react";
import classes from "./Backdrop.css"
const Backdrop=(props)=>{
let scrollheight=Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
return props.showbackdrop?<div className={classes.backdrop} onClick={props.removepopup} style={{height:scrollheight}}></div>:null
}
export default Backdrop;