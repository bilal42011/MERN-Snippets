const express=require("express");
const router=express.Router();
const Post=require("../modals/posts");
//For Getting all posts in Post model
router.get("/",async(req,res)=>{
    try{
    
const posts=await Post.find();
console.log(posts);
res.json(posts);
    }
    catch(err){
        res.json({message:err})
    }
});
//For Creating New Post in Post model
router.post("/",async (req,res)=>{
console.log(req.body);
    const post=new Post({
        title:req.body.title,
        description:req.body.description,
    });
    try{
    const data=await post.save()
        console.log(data);
        res.json(data);
    }
    catch(err){
        res.json(err.message);
    }
});
//Getting specig post by id by dynamic params 
router.get("/:postid",async(req,res)=>{
    try{
const post=await Post.findById(req.params.postid);
console.log(post);
res.json(post);
    }
    catch(err){
        res.json(err);
    }
})
//Deleting specific post through dynamic parameters
router.delete("/:postid",async(req,res)=>{
try{
const post=await Post.findByIdAndRemove(req.params.postid);
console.log(post);
res.json(post);
}
catch(err){
    res.json(err);
}
});
//Updating Post by dynamic params
router.patch("/:postid",async(req,res)=>{
    try{
const post=await Post.updateOne({_id:req.params.postid},
    {$set:{title:req.body.title}});
console.log(post);
res.json(post);
    }
    catch(err){
        res.json({message:error});
    }
})
module.exports=router;