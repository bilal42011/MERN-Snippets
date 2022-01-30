import React,{useEffect} from "react";
import {Button, IconButton, Toolbar, Typography, Container, TextField} from "@mui/material";
import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import SendIcon from '@mui/icons-material/Send';
import {useForm,Controller} from "react-hook-form"
let useStyles=makeStyles({
  typo:{
flex:1
  },
  container:{
marginTop:"20px"
  }
})
const App=()=> {
  let classes=useStyles();
  let {register,handleSubmit,formState:{errors},control,watch,getValues,setError}=useForm({
mode:"all",
    defaultValues:{
    firstname:""
  }
  });
  const onSubmithandler=(data)=>console.log(data);
let color;
if(errors.firstname){
  color="error"
}
else{
  color="success"
}
console.log(color);
console.log(watch("firstname"));
useEffect(()=>{
  if(getValues("firstname")==""){
  setError("firstname",{
    type:"required",
    message:"first name is required field"} );
  }
},[]);
return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton sx={{mr:2,color:"white"}}>
          <MenuIcon sx={{color:"white"}}/>
          </IconButton>
          <Typography className={classes.typo}>
          Menu
          </Typography>
          <p>Login</p>
            </Toolbar>
      </AppBar>

  <Container align="center" disableGutters className={classes.container}>      
     <form onSubmit={handleSubmit(onSubmithandler)} autoComplete="off">
      <Controller 
      name="firstname" 
      control={control} 
      rules={{required:"First Name is required Field",
      maxLength:{value:15,message:"Maximum 15 letters Allowed*"}}}
      render={({field})=>(
        <TextField {...field} 
        color={color}
        variant="outlined" 
        label="First Name"
         fullWidth 
         error={errors.firstname}
         helperText={errors.firstname? errors.firstname.message:
        <Typography component="p" sx={{color:"green",fontSize:"0.75rem"}}>Looks Good</Typography>}/>
      )}/>
      <Button 
sx={{mt:"10px"}}
type="submit"
      size="large" 
      color="secondary" 
      variant="outlined"
      endIcon={<SendIcon color="primary" />}>Submit</Button>
    </form>
    </Container>
    </div>
  );
}

export default App;
