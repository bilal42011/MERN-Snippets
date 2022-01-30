import React from "react";
import classes from "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";
const Modal=(props)=>{
    console.log("inside modal component");
return <>
<Backdrop showbackdrop={props.showorder} removepopup={props.cancelpopup}></Backdrop>
<div className={classes.modal} style={props.showorder?{transform:"translateY(100px)",opacity:"1"}:{transform:"translateY(-900px)",opacity:"0"}}>
{props.children}
</div>
</>
}
export default Modal;