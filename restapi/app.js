const express=require("express");
const app=express();

const server=app.listen(9000,()=>{
    console.log("Server is listening");
    console.log(server.address().address);
    console.log(server.address().port);
})

app.use("/",(req,res,next)=>{
    console.log("inside / middleware executing it");
    next();
});

app.get("/",(req,res)=>{                    //route
res.send("Response from express server");
});

