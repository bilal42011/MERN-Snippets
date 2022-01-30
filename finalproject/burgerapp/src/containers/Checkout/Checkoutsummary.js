import React,{Component} from "react";
import Orders from "./Orders/Orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import {Route} from "react-router-dom";
import Contact from "../Contactform/Contact";
class Checkoutsummary extends Component{
state={
ingredients:null,
  price:0,
    loading:true
}

Continuehandler=()=>{
    console.log("inside continuehandler");
this.props.history.push(this.props.match.path+"/contact-form");
}
Cancelhandler=()=>{
    console.log("inside cancelhandler");
    this.props.history.push("/");
}

componentDidMount(){
    const query= new URLSearchParams(this.props.location.search);
    if(query.has("price")){
        this.setState({price:query.get("price")});
        query.delete("price");
    }
    console.log(query.has("price"));
    console.log("after setting price in component did mount of checheckoutsummary component");
    let newingredients={};
    for(const [key,value] of query){
    newingredients[key]=value;
    }
    if(Object.keys(newingredients).length){
        this.setState({ingredients:newingredients,loading:false});
    }
    else{
        this.props.history.push("/");
    }
}
 render(){
return <> 
{(this.state.loading)?<Spinner/>:<Orders 
ingredients={this.state.ingredients} 
price={this.state.price}
continue={this.Continuehandler}
cancel={this.Cancelhandler}/>}
 <Route path={this.props.match.path+"/contact-form"}
 render={(props)=><Contact {...props} ingredients={this.state.ingredients} price={this.state.price}/>}/>
 </>
 }

}
export default Checkoutsummary