import React,{Component} from "react";
import Posts from "../Posts/Posts";
import Addpost from "../Addpost/Addpost";
import Fullpost from "../Fullpost/Fullpost";
import  "./Blog.css";
import { Route,NavLink,Switch,Link, Redirect} from "react-router-dom";

class Blog extends Component{
componentDidMount(){
    console.log("inside component did mount of blog component");
}
    
    render(){
        console.log("inside render method of Blog commponent");
        return <>
        <header>
            <nav className="nav">
<NavLink exact to="/posts">Blogs</NavLink>
<NavLink exact to={{pathname:"/add-new-posts",
         hash:"#submit",
         search:"?quick-submit=true"}}>New Posts</NavLink>
</nav>
        </header>
        <main>
            <Switch>
          <Route path="/" exact component={props=><h1>Click Blogs to see Posts!!</h1>}></Route>
          <Route path="/posts" component={Posts}/>
          <Route path="/add-new-posts" exact component={Addpost} />
          <Redirect from="/333" to="/posts"/>          
          <Route render={()=><h1>Error 404 Not Found</h1>} /> 
         { /*<Route path="/:postid" exact component={Fullpost}></Route>*/}
          </Switch>
        </main>
        </>
    }
}

export default Blog;