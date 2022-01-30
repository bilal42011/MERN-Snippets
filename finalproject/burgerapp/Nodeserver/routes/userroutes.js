const express=require("express");
const router=express.Router();
const User=require("../modals/users");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
//For Getting all Users in User model

router.get("/",async(req,res)=>{
    try{    
const users=await User.find();
console.log(users);
res.json({users:users});
    }
    catch(err){
        res.status(400).send({error:err.message}); }
});
//For Creating New User in User model
router.post("/register",async (req,res)=>{
console.log(req.body);
let newemail=req.body.email;
newemail=newemail.toLowerCase();
const userexist=await User.findOne({email:newemail});
console.log(userexist);
if(userexist) res.status(400).send({error:"Email is already Registered"})    
const salt=await bcrypt.genSalt(10);
const hashpassword=await bcrypt.hash(req.body.password,salt);
const user=new User({
        name:req.body.name,
        email:newemail,
        password:hashpassword,
        zipcode:req.body.zipcode
    });
    try{
    const data=await user.save();
        console.log(data);
        res.status(200).json({user:data});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
});
//Getting specig User by id by dynamic params 
router.get("/:userid",async(req,res)=>{
    try{
const user=await User.findById(req.params.userid);
console.log(user);
res.status(200).json({user:user});
    }
    catch(err){
        res.status(400).send({error:err.message});
    }
})
//Deleting specific User through dynamic parameters
router.delete("/:userid",async(req,res)=>{
try{
const user=await User.findByIdAndRemove(req.params.userid);
console.log(user);
res.status(200).json({user:user});
}
catch(err){
    res.status(400).send({error:err.message});
}
});
//Updating User by dynamic params
router.patch("/:userid",async(req,res)=>{
    try{
const user=await User.updateOne({_id:req.params.userid},
    {$set:{name:req.body.name}});
console.log(user);
res.status(200).json({user:user});
    }
    catch(err){
        res.status(400).send({error:err.message});
    }
});
//Login authentication in express
router.post("/login",async(req,res)=>{
    let newemail=req.body.email;
    newemail=newemail.toLowerCase();
    try{
const user=await User.findOne({email:newemail});
if(!user) res.status(400).send({error:"Email not found"});
const isvalid=await bcrypt.compare(req.body.password,user.password);
if(!isvalid) res.status(400).send("Password is Incorrect");
//res.json("Login Successful");
const token=jwt.sign({_id:user._id},"secretkey");
res.cookie("jwt",token,{httpOnly:true});
res.status(200).json({userid:user._id});
}
catch(err){
    res.status(400).send({error:err.message});
}
});

router.post("/loginiddetails",async(req,res)=>{
const token=req.cookies.jwt;
if(!token) res.status(400).json({error:"Access denied"});
console.log(token);
const tokenuser=jwt.verify(token,"secretkey");
try{
    const user=await User.findById(tokenuser._id);
    console.log(user);
    res.status(200).json({user:user});
        }
        catch(err){
            res.status(400).send({error:err.message});
        }
    }
);

module.exports=router;