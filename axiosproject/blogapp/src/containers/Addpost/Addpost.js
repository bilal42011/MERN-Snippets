import React, { Component } from "react";
import classes from "./Addpost.module.css";
import axios from "axios";

class Addpost extends Component{
state={
newpost:{title:"",body:"",author:"",},
arraylength:null,
deleteids:null
}
componentDidMount(){
    console.log("inside component did mount of Addpost");
 this.Addposthandler();
}
Addposthandler=()=>{
    axios.get("/posts.json")
    .then(response=>{
        let newdeleteids=[];
        response.forEach((post,id)=>{
    if(post==null)
    {
    newdeleteids.push(id);
    }
    });
       this.setState({arraylength:response.length,deletedids:newdeleteids});
       
    }).catch(err=>{
        console.log("Something went wrong", err);
    })
    }


Addpost=()=>{
    if(this.state.deleteids!==null){
        let postids=this.state.deleteids;
        let currentid=postids.pop();
axios.put(`/posts/${currentid}.json`,{...this.state.newpost,id:currentid})
.then(response=>{console.log(response);
//this.Addposthandler();
//this.setState({newpost:{title:"",body:"",author:""},deletedids:postids});
this.props.history.push("/posts");})
.catch(error=>{console.log("Something Went Wrong", error);});
}
else{
    let currentid=this.state.arraylength;
    axios.put(`/posts/${currentid}.json`,{...this.state.newpost,id:currentid})
.then(response=>{console.log(response.data);
  //  this.Addposthandler();
//this.setState({newpost:{title:"",body:"",author:""}});
this.props.history.push("/posts");})
.catch(error=>{console.log("Something Went Wrong", error);})
}
}
    render(){
        console.log("inside addpost render method");
        console.log(this.state.deleteids);
        console.log(this.state.arraylength);
return <div className={classes.addpost}>
<h2>Add a Post</h2>
<label><strong>Title</strong></label>
<input type="text" required value={this.state.newpost.title}
autoFocus 
onChange={(event)=>{let newtitle=event.target.value;
this.setState({newpost:{...this.state.newpost,title:newtitle}});}}></input>
<label><strong>Content</strong></label>
<input type="text" required value={this.state.newpost.body} 
onChange={(event)=>{let newbody=event.target.value;
this.setState({newpost:{...this.state.newpost,body:newbody}});}}></input>
<label><strong>Author</strong></label>
<select required value={this.state.newpost.author} 
onChange={(event)=>{let newauthor=event.target.value;event.preventDefault();
this.setState({newpost:{...this.state.newpost,author:newauthor}});}}>
    <option value="Max">Max</option>
    <option value="Payne">Payne</option>
</select>
<a onClick={this.Addpost}>Add</a>
</div>
}
}
export default Addpost;