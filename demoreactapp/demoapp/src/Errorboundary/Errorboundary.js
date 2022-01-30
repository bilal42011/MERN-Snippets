import React from "react";
class Errorboundary extends React.Component{
state={haserror:false,errormsg:""};

componentDidCatch(error,info){
    if(error){
        this.setState({hasError:error,errormsg:info});
    }
}

    render(){
        if(this.state.haserror){
            return <h1>{this.state.errormsg}</h1>
        }
else{
return this.props.children;
}   
 }
    }
export default Errorboundary;