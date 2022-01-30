const jwt=require("jsonwebtoken");

const authverify=(req,res,next)=>{
const token=req.header("auth-token");
try{
const verified=jwt.verify(token,"secretkey");
req.user=verified;
next();
}
catch(error){
    res.status(400).send("Provide token");
}
 }
 module.exports=authverify;