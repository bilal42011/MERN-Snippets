import React,{Component} from "react";
let wrapfunc=(wrapped,classname)=>{
return class Withclass extends Component {

render(){
return <div className={classname}> 
<wrapped/>
 </div>
 }

 
   }
    }
    export default wrapfunc;
    