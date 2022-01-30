import React from "react";
import classes from "./Post.module.css";
import { Link,Route,withRouter} from "react-router-dom";
const Post=(props)=>{
return <div className={classes.post}>
    <h3>Title: {props.title}</h3>
    <p>Content: {props.content}</p>
    <p><strong>Published by:</strong>Author: Max</p>
    <Link to={"/posts/"+props.id}>View Post</Link>
</div>

}
export default withRouter(Post);