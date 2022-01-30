import React,{Component} from "react";
import axios from "../../axiosorders";
import Spinner from "../../components/UI/Spinner/Spinner";
import Showorder from "./Showorder/Showorder";
import classes from "./Showorders.css";
class Showorders extends Component{
state={
    orders:null,
    loading:false
}
    componentWillMount(){

 (async ()=>
 {
     try{
        const orders=await axios.get("/orders.json");
         let neworders=[];
         for(const order in orders){
         neworders.push({
             ingredients:orders[order].ingredients,
             price:orders[order].price,
             client:orders[order].name,
             delivery:orders[order].delivery,
             id:order
         });
         }
         console.log(neworders);
     this.setState({orders:neworders});
        }
      catch(error){
          console.log(error);
      }             

    })();


}
    
render(){
    console.log(this.state.orders);
const neworder=(!this.state.orders)?<Spinner/>:this.state.orders.map(order=>{
    return <Showorder 
    ingredients={order.ingredients}
    price={order.price}
    client={order.client}
    delivery={order.delivery}
    key={order.id}/>
});
    return <div className={classes.orders}> 
    {neworder}
    </div>
    }

}
export default Showorders;