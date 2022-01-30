import React,{Component} from "react";
import Burgeringredients from "../../components/Burgeringredients/Burgeringredients";
import Buildcontrols from "../../components/Buildcontrols/Buildcontrols";
import Modal from "../../components/UI/Modal/Modal";
import Ordersummary from "../../components/Ordersummary/Ordersummary";
import axios from "../../axiosburger";
import Spinner from "../../components/UI/Spinner/Spinner";
import errorhandler from "../../HOC/Errorhandler/Errorhandler";
const ingredientsprice={
    cheese:5,
    salad:2,
    meat:8,  
    bacon:4
}
class Burgerbuilder extends Component{
    state={
        ingredients:null,
        price:4,
        showorder:false,
        showorderpopup:false,
        loader:false,
        error:false
    };

Updateorder=(ingredients)=>{
let sum=Object.keys(ingredients)
.reduce(
    ((sum,ingredient)=>{
sum=ingredients[ingredient]+sum;
return sum;
    }),
    0);
    console.log(sum);
    this.setState({showorder:sum>0});
}

Orderpopuphandler=()=>{
this.setState({showorderpopup:true});
}

Orderpopupcancelhandler=()=>{
    /*let newingredients={...this.state.ingredients};
    for(let ingredient in newingredients){
newingredients[ingredient]=0;
    }*/
this.setState({showorderpopup:false})
}

Ordercontinuehandler=()=>{
    this.setState(prevstate=>{
        return {loader:!prevstate.loader};
    });
 
    const queryparams=[];
    for(const [key,value] of Object.entries(this.state.ingredients)){
        queryparams.push(encodeURIComponent(key)+"="+encodeURIComponent(value));
    }
    queryparams.push(encodeURIComponent("price")+"="+encodeURIComponent(this.state.price));
    const querystring=queryparams.join("&");
    this.props.history.push({
        pathname:"/checkout",
        search:"?"+querystring
    });


    // const data={
    //     name:"jack",
    //     email:"jacke@mail",
    //     ingredients:this.state.ingredients,
    //     adress:{country:"america",
    //     city:"loss angeles",
    //     street:" 5 east lewis",
    //     area:"cambridge"
    // }
    // };
    // axios.post("/orders.json",data)
    // .then(response=>{
    //     console.log(response);
    //     console.log("request made");
    //     this.setState(prevstate=>{
    //         return {showorderpopup:!prevstate.showorderpopup,loader:!prevstate.loader};
    //     });
    // }).catch(err=>{
    //     console.log("something went wrong", err);
    //     this.setState(prevstate=>{
    //         return {showorderpopup:!prevstate.showorderpopup,loader:!prevstate.loader};
    //     });
    // });
}

Addingredient=(type)=>{
        if(this.state.ingredients[type]<2)
        {
const newcounter=this.state.ingredients[type]+1;
const newingredients={...this.state.ingredients};
newingredients[type]=newcounter;
const newprice=this.state.price+ingredientsprice[type];
this.Updateorder(newingredients);
this.setState({ingredients:newingredients,price:newprice});
    }
    else{
        alert("Its Too much you will Explode.\nEach Ingredient has limit of 2");
    }
}

Removeingredient=(type)=>{
const newcounter=this.state.ingredients[type]-1;
const newingredients={...this.state.ingredients};
newingredients[type]=newcounter;
const newprice=this.state.price-ingredientsprice[type];
this.Updateorder(newingredients);
this.setState({ingredients:newingredients,price:newprice});
}

componentDidMount(){
    console.log("inside component will mount of burger builder");
    axios.get("/Ingredients.json")
    .then(response=>{
        console.log("get response", response);
        this.setState({ingredients:response});
    }).catch(err=>{console.log("get error catch", err);
       this.setState(prevstate=>{
        return {error:!prevstate.error};
            });})
}

componentWillUnmount(){
    console.log("Inside burgerbuilder component will unmount");
}
render(){
        const disableingredients={...this.state.ingredients};
        for(let ingredient in disableingredients){
            disableingredients[ingredient]=disableingredients[ingredient]<=0;
        }

let ordersummary=<Spinner/>
let burger=<Spinner/>

if(this.state.ingredients){
 ordersummary=<Ordersummary 
ingredients={this.state.ingredients} 
cancelorder={this.Orderpopupcancelhandler}
continueorder={this.Ordercontinuehandler}/>;
 burger= <>
<Burgeringredients ingredients={this.state.ingredients}/>
<Buildcontrols addingredient={this.Addingredient}
burgerprice={this.state.price}
removeingredient={this.Removeingredient}
disableremove={disableingredients}
disableorder={!this.state.showorder}
showpopup={this.Orderpopuphandler}/>
</>
}
if(this.state.loader){
    ordersummary=<Spinner />;
}



return<>
<Modal showorder={this.state.showorderpopup} cancelpopup={this.Orderpopupcancelhandler}>
{this.state.error?<p>Faild to load burger</p>:ordersummary}
    </Modal>
    {this.state.error?<p>Faild to load burger</p>:burger}
</>
    }

}
export default errorhandler(Burgerbuilder,axios);