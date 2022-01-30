import React,{Component} from  "react";
import Persons from "../components/persons/Persons";
import Cocktail from "../components/cocktail/Cocktail";
import Check from "../components/check/Check";
import  classes  from "./App.css";
const authcontext=React.createContext(false);

class App extends Component{
constructor(props){
super(props);
console.log("inside App constructor");
}
  state={
  //persons:Persondata,
  persons:[
    {id:"ad",name:"john",age:18},
    {id:"asda", name:"Staphanie",age:22},
    {id:"aqwd", name:"Alex",age:25}
    ],  
  showpersons:false,
  isauthenticated:false
}
onClickHandler=()=>{
  this.setState({persons:[
    {id:"add",name:"Stokes",age:18},
    {id:"ads",name:"Staphanie",age:22},
    {id:"ada",name:"Alex",age:39}
    ]});
}
/*onChangeHandler=(event,index)=>{               //Passing this method as props to Person component
const newpersons=[...this.state.persons];
newpersons[index].name=event.target.value;
this.setState({persons:newpersons});
}*/
onChangeHandler=(event,id)=>{
const personindex=this.state.persons.findIndex(person=>person.id===id);
const newpersons=[...this.state.persons];
newpersons[personindex].name=event.target.value;
this.setState({persons:newpersons});
}
onCLickToggleHandler=()=>{
  let newshowpersons=this.state.showpersons;    //dont change the state dierectly 
this.setState({showpersons:!(newshowpersons)})
}
onClickDeleteHandler=(index)=>{
  const newpersons=[...this.state.persons];
  newpersons.splice(index,1);
  this.setState({persons:newpersons});
}
loginhandler=()=>{
  let auth=!this.state.isauthenticated;
this.setState({isauthenticated:auth});
}
UNSAFE_componentWillMount(){
  console.log("inside App in will mount");
}
componentDidMount(){
  console.log("inside App  did mount");
}
shouldComponentUpdate(nextProps,nextState){
  console.log("inside App shouldcomponentupdate");
return true;
}
UNSAFE__componentWillUpdate(nextProps,nextState){
  console.log("inside App componentwillupdate");
}
componentDidUpdate(){
console.log("inside App componentdidupdaate");
}
  render(){

console.log("inside App render method");
let personcomponents=null;
if(this.state.showpersons){
personcomponents=<Persons 
persons={this.state.persons} 
delete={this.onClickDeleteHandler}
 change={this.onChangeHandler}></Persons>
}

return <div className={classes.App}> 
<Cocktail 
personslength={this.state.persons.length} 
showpersons={this.state.showpersons} 
click={this.onClickHandler} 
  toggle={this.onCLickToggleHandler}
  loginhandler={this.loginhandler}/>
<div className={classes.personwrapper}>
<authcontext.Provider value={this.state.isauthenticated}>
{personcomponents}
</authcontext.Provider>
</div>
<Check/>
</div>
}
  }
export {authcontext};
export default App;