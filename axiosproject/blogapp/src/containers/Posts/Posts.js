import React,{Component} from "react";
import Post from "../../components/Post/Post";
import classes from "./Posts.module.css";
import Fullpost from "../Fullpost/Fullpost";
import axios from "../../axios";
import {Route} from "react-router-dom";
class Posts extends Component{
    state={
        posts:null,
        id:null
            }

            Viewposthandler=(postid)=>{
               // this.props.history.push("/posts/:postid");//programming way of pushing link to browser 
            }

            Deleteposthandler=()=>{
                axios.get("/posts.json")
                .then(response=>{
            this.setState({posts:response});
            }).catch(err=>{
                    console.log("Something went wrong", err);
                })
            }


        componentDidMount(){
            console.log("inside component did mount of Posts");
                axios.get("/posts.json").then(response=>{
                    console.log(response);
                    console.log("inside then");
                    this.setState({posts:response}); 
                    console.log("after setting state in then");
                }).catch(error=>{console.log("Something Went wrong",error);});
            }
            componentDidUpdate(){
                console.log("inside component did update");
            }
render(){
    console.log(this.props.name);
    console.log(this.props);
    let posts=this.state.posts;
    console.log(this.state.posts);    
    if(posts===null){
            posts=<h1>Loading!!!!!!!</h1>
        }
        else{
            posts=this.state.posts.map(post=>{
                if(post!==null && post!==undefined){
                    return <Post title={post.title} content={post.body} key={post.id}
                     id={post.id}></Post>
                }}
                        );
                       posts= posts.filter(post=>post!==undefined);
        }
        console.log(posts);
                return <>
                <div className={classes.posts}> 
                {posts}
                </div>
                <Route 
                path={this.props.match.url+"/:postid"} exact   //dynamic path setup
                 component={(props)=>
                     {
                         return <Fullpost {...props} updateposts={this.Deleteposthandler}/>}}
                     >
                </Route>
               </>
}
}

export default Posts;