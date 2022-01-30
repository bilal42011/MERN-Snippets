import React, { Component } from "react";
import classes from "./Toolbar.css";
import Navbar from "./Navbar/Navbar";
import Logo from "../../Logo/Logo";
import Sidedrawer from "./Sidedrawer/Sidedrawer";
class Toolbar extends Component{

    state={showsidedrawer:false};

opensidedrawerhandler=()=>{
    console.log("inside opensidehandler");
    this.setState(
        (prevstate)=>{
    return {showsidedrawer:!prevstate.showsidedrawer}
    });
}

closesidedrawerhandler=()=>{
    this.setState(
        (prevstate)=>{
    return {showsidedrawer:!prevstate.showsidedrawer}
    });
}
render(){
return <div className={classes.toolbar}>
   <Sidedrawer opensidedrawer={this.state.showsidedrawer} closesidedrawer={this.closesidedrawerhandler}/>
<div onClick={this.opensidedrawerhandler} className={classes.menu}>
    <i className="fas fa-hamburger fa-2x"></i>
</div>
<Logo/>
<div className={classes.shownavbar}>
<Navbar/>
</div>
</div>

}
}
export default Toolbar;