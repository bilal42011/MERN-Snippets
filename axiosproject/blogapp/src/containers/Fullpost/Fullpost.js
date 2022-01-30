import React, { Component } from "react";
import classes from "./Fullpost.module.css";
import axios from "axios";

class Fullpost extends Component{
    state={
        postitem:null,
        currentid:null
    }


Deletehandler=()=>{
    axios.delete(`/posts/${this.props.match.params.postid}.json`)
    .then(response=>{
        console.log(response);
        this.setState({postitem:null,currentid:null});
        this.props.updateposts();
    }).catch(error=>{console.log("Something Went wrong");});
}


    componentDidMount(){
        console.log("inside component did mount of full post");
        if(this.props.match.params.postid!==null){
        axios.get(`/posts/${this.props.match.params.postid}.json`)
        .then(response=>{
            console.log(this.props.match.params.postid , response);
            this.setState({postitem:response,currentid:this.props.match.params.postid});
            console.log("Request made");
        }).catch(error=>{
            console.log("inside fullpost error",error);
        });
    }
}

// componentDidUpdate(prevprops){
// console.log("inside comoponent did update of full post");
// if(prevprops!==this.props){
//     if(this.props.match.params.postid!==null){
//         axios.get(`/posts/${this.props.match.params.postid}.json`)
//         .then(response=>{
//             console.log(this.props.match.params.postid , response);
//             this.setState({postitem:response,currentid:this.props.match.params.postid});
//             console.log("Request made");
//         }).catch(error=>{
//             console.log("inside fullpost error",error);
//         });
//     }
// }
// }
componentWillUnmount(){
    console.log("inside component will unmount of fullpost");
}

    render(){
console.log("current id is : "+this.state.currentid);        
        let fullpost=<h1>Loading!!!</h1>;
        if(!this.state.currentid){
          fullpost=<h1>Please Select a Post</h1>
        }
       if(this.state.postitem){
        fullpost=<>
        <h1>Full Post</h1>
        <h2>Title: {this.state.postitem["title"]}</h2>
        <p>Content: {this.state.postitem["body"]}</p>
        <p><strong>Published by:</strong>Author:Max</p>
        <p><strong>Post id:</strong>{this.state.postitem["id"]}</p>
        <button onClick={this.Deletehandler}>Delete</button>
        </>
       }
       
return <div className={classes.fullpost}>
{fullpost}
</div>
    }
}
export default Fullpost;