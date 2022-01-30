import {Component} from "react";
class Wrapper extends Component{
render(){
return <div className={this.props.classname}> 
{this.props.children}
</div>
}

}
export default Wrapper;