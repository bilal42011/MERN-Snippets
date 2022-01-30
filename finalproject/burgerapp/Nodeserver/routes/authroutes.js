const express=require("express");
const router=express.Router();
const User=require("../modals/users");
const auth=require("../authverify");

router.get("/",auth,async(req,res)=>{
const id=req.user;
try{
const user=await User.findById(id);
if(!user) res.send("Invalid user request");
res.json(user);
}
catch(err){
    res.status(400).send(err.message);
}
})
module.exports=router;