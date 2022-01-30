import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
//import axiosburger from "../../axiosburger";
const errorhandler=(WrappedComponent,axios)=>{
return class extends Component{
state={
error:false,
requestint:null,
responseint:null
}

Showerrorhandler=()=>{
    this.setState(prevstate=>{ return {error:false};});    
}

componentWillMount(){
const newrequestint=axios.interceptors.request.use(request=>{
console.log("inside axiosburger request interceptor", request);
return request;    
},error=>{
console.log("inside axiosburger request error handler", error);
this.setState({error:error});
return Promise.reject(error);
});
const newresponseint=axios.interceptors.response.use(response=>{
    console.log("inside axiosburger response interceptor", response);
   console.log(response.data);
    return response.data;
    
    // this.setState({error:new Error("Network Error")});
    // return Promise.reject(new Error("Network Error"));
    },error=>{
    console.log("inside axiosburger response interceptor error handler", error);
    this.setState({error:error});
    return Promise.reject(error);
    });
    this.setState({requestint:newrequestint,responseint:newresponseint})
}
componentWillUnmount(){
    // console.log("inside componentwillunmount of errorhanlder component");
    // axiosburger.get("/Ingredients.json").then(data=>{
    //     console.log("inside new axios check: ", data);
    // });
    console.log(this.state.requestint , this.state.responseint);
    axios.interceptors.request.eject(this.state.requestint);
    axios.interceptors.response.eject(this.state.responseint);
    console.log(this.state.requestint , this.state.responseint);
}
render(){
return <> 
<Modal showorder={this.state.error} cancelpopup={this.Showerrorhandler}>
    {this.state.error?<p>{this.state.error.message}</p>:null}
</Modal>
<WrappedComponent {...this.props}></WrappedComponent>
</>
}

}

}
export default errorhandler;