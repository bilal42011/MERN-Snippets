import React,{Component} from "react";
import Person from "./person/Person";  //Js extension will be added automatically be webpack at build time
import Errorboundary from "../../Errorboundary/Errorboundary";
class Persons extends Component{
state={};
lastpersonref=React.createRef();
UNSAFE_componentWillReceiveProps(nextProps){
console.log("inside Persons componentwillreceriveprops");
}
static UNSAFE__getDerivedStateFromProps(nextProps,prevstate){
console.log("inside Persons getderivedstatefromprops")
return prevstate;
}
shouldComponentUpdate(){
  console.log("inside Persons shouldcomponentupdate");
return true;
}
UNSAFE__componentWillUpdate(){
  console.log("inside Persons componentwillupdate");
}
componentDidUpdate(){
console.log("inside Persons componentdidupdaate");
}
componentDidMount(){
this.lastpersonref.current.focus()
console.log("inside Persons componentdidmount");
}
componentWillUnmount(){
  console.log("inside Persons component will unmount");
}

render(){
console.log("inside perosns render method");
  return  this.props.persons.map((person,index)=>{
        return <Errorboundary key={person.id}> 
        <Person 
        name={person.name}
        age={person.age}
       // key={person.id}
        showinput={false} 
        changehandler={(event)=>this.props.change(event,person.id)}
        deletehandler={()=>this.props.delete(index)}
        ref={this.lastpersonref}/>
        </Errorboundary>}
        
        )
    }
}
export default Persons ;