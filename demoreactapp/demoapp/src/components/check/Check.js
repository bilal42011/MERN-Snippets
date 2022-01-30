import React,{Component} from "react";
import {classbutton} from "../cocktail/Cocktail";
class Check extends Component{
state={counter:1};

counthandler=()=>{
    let inccounter=this.state.counter;
    this.setState({counter:++inccounter});
    }
    render(){
        console.log("inside check render");
    return <>
    <p style={{textAlign:"center"}}>{this.state.counter}</p>
    <button onClick={this.counthandler} className={classbutton}>Count</button> 
    <p>hello</p>
</>
    }
}
export default Check;