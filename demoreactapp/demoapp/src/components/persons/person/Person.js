import React,{Component} from "react"
import classes from "./Person.css"
import Wrapper from "../../../HOC/Wrapper";
import wrapfunc from "../../../HOC/Wrapper";
import {authcontext} from "../../../containers/App";
const forwardref=React.forwardRef((props,ref)=>{
class Person extends Component{
 state={};
 inputref=React.createRef();

componentDidMount(){
    //this.inputref.current.focus();
}
 render(){
    let inputelement=null;
if(true){
inputelement=<input className={classes.input} ref={ref} onChange={this.props.changehandler}type="text"></input>
}

//higher order component like errorboundary
return <div className={classes.App}>
    <authcontext.Consumer>
    {(isauthenticated)=>isauthenticated?<p>Authenticated</p>:null} 
    </authcontext.Consumer>  
<p>My Name is {this.props.name}</p>
<p>I am {this.props.age} Years Old</p>
<p>{this.props.children}</p>
{inputelement}
<br></br>
<button className={classes.button} onClick={this.props.deletehandler}>Delete</button>
</div>
}
}
return <Person {...props} />
});
export default forwardref;