import React from "react";
import burgerimage from "../../assets/burger-hamburger-colorful-illustration-by-Vexels.svg";
import classes from "./Logo.css";
const Logo=()=>{
return <div className={classes.wrapperdiv}>
    <div className={classes.logo}>
<img src={burgerimage}></img>
</div>
<p><strong>Burger</strong></p>
</div>

}
export default Logo;