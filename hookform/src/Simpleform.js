import React from "react";

const Form=()=>{
const submithandler=(event)=>{
event.preventDefault();
console.log(event.target.elements);
    let element=event.target.elements.name;
console.log(element.value);
}
    return <form onSubmit={submithandler}>
        <input type="text" name="name"></input>
        <input type="text"></input>
        <input type="submit" />
    </form>

}
export default Form ;