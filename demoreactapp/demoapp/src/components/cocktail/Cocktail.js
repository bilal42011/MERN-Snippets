import React,{Component} from "react";
import classes from "./Cocktail.css";
class Cocktail extends Component{

render(){

    let classbutton=" ";
if(this.props.showpersons){
    classbutton=classes.button;
}
else{
    classbutton=classes.buttonfalse;
}
    let classname=[];
    if(this.props.personslength<=2){
    classname.push(classes.white);
    }
    if(this.props.personslength<=1){
      classname.push(classes.bold);
      }
return <div className={classes.cocktail}>     
<p className={classname.join(" ")}>Class Component Paragraph</p>
      <button className={classbutton} onClick={this.props.click}>CLick Me</button>
      <button className={classbutton} onClick={this.props.toggle}>Toggle Persons</button>        
      <button onClick={this.props.loginhandler}>Login</button>
</div>
    }
}
let classbutton=classes.button;
export {classbutton};
export default Cocktail;