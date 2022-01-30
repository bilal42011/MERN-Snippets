const path=require("path");
const express=require("express");
const postrouter=require("./routes/postroutes");
const userrouter=require("./routes/userroutes");
const authrouter=require("./routes/authroutes");
const mongoose=require("mongoose");
const Parser=require("body-parser");
const cookieParser=require("cookie-parser");
const app=express();

// let x=1;
// function defaulter(x=9,y){
//     console.log(x);
// }
// defaulter(x);
app.listen(8000,()=>{
    console.log("Server is listening");
    console.log(__dirname);
    console.log(path.join(__dirname,"build"));
});
app.use(Parser.urlencoded({ extended: false }));
app.use(Parser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'build'))); 

app.get('/',(req, res)=>{
    console.log("inside second middleware");
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
      });

     app.use("/posts",postrouter);
     app.use("/users",userrouter);
     app.use("/profile",authrouter);
     app.use((req, res)=>{
console.log("inside second middleware");
    res.redirect("/");
  });
const uri="mongodb+srv://bilal42011:bilalmalik10@cluster0.azkuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri);
mongoose.connection.on("connected",()=>{
    console.log("mongoose is connected to mongod db");
})