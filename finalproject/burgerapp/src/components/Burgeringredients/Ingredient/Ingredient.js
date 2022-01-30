import React from "react";
import classes from "./Ingredient.css";
import PropTypes from "prop-types";
const Ingredient=(props)=>{
    switch(props.type){
        case "breadtop":
      return  <div className={classes[props.type]}>
<div className={classes.seeds1}></div>
<div className={classes.seeds2}></div>
        </div>
 default:   
return <div className={classes[props.type]}></div>
    }
}
Ingredient.propTypes={
    type:PropTypes.string
}

export default Ingredient;