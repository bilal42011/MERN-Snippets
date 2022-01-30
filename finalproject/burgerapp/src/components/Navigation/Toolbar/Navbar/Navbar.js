import React from "react";
import classes from "./Navbar.css"; 
import Navitem from "./Navitem/Navitem";
const Navbar=()=>{
return <ul className={classes.navbar}>
    <Navitem  link="/">Burger Builder</Navitem>
    <Navitem link="/orders">Orders</Navitem>
</ul>
 }
 export default Navbar;