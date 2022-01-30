import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navitem.css";
const Navitem=(props)=>{
return <li className={classes.navitem}>
<NavLink to={props.link} exact activeStyle={{
    fontWeight: "bold",
    color: "crimson",
    backgroundColor:"yellow"}}><strong>{props.children}</strong></NavLink>
</li>
}
export default Navitem;