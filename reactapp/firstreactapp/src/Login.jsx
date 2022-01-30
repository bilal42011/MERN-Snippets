import React,{useState} from "react";


let Login=()=>{
    const [email,setemail]=useState("");
    const [fullemail,setfullemail]=useState("");
    const [password,setpassword]=useState("");
    const [fullpassword,setfullpassword]=useState("");

    let emailevent=(event)=>{             
setemail(event.target.value);
    } 
    let passwordevent=(event)=>{
setpassword(event.target.value);
    }

    let submittevent=(event)=>{
event.preventDefault();
setfullemail(email);
setfullpassword(password);
console.log(fullemail);
    }
    
return (
<>
<h2>Login Form</h2>
<form onSubmit={submittevent}>
<label>Email:{fullemail}</label>
<br/>
<input type="Email"  onChange={emailevent} ></input>
<br/>
<label>Password:{fullpassword}</label>
<br/>
<input type="password" onChange={passwordevent} ></input> 
<br/>
<button>Submitt</button>
</form>
</>)
}
export default Login;