const mongoose=require("mongoose");
const postschema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now
    }
});
module.exports=mongoose.model("Posts",postschema);