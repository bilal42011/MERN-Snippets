import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../../Logo/Logo";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import classes from "./Sidedrawer.css";
const Sidedrawer=(props)=>{
    console.log("inside sidedrawer comoponent");
return <>
<Backdrop showbackdrop={props.opensidedrawer} removepopup={props.closesidedrawer}></Backdrop>
<div className={classes.sidedrawer} 
style={props.opensidedrawer?{transform:"translateX(0px)"}:{transform:"translateX(-600px)"}}>
<div onClick={props.closesidedrawer} className={classes.close}>
<i class="fas fa-times"></i>
</div>
<hr/>
<Logo></Logo>
<Navbar></Navbar>
</div>
</>
}
export default Sidedrawer;