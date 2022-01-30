import React from "react";
import "./index.css";
let Card = (props)=>{

    return (
    <div className="box">
<img src={props.imgsrc} />
<div classname="boxinfo">
    <h2>{props.mname}</h2>
    <p>Movie Description</p>
    <button><a href={props.link} target="_blank">Watch Now</a></button>
</div>
    </div>);
}

export default Card;