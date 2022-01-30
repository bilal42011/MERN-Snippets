const mongoose =require("mongoose");
const userschema=mongoose.Schema({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
type:String,
required:true,
min:[4,"password too short"]
},
zipcode:{
    type:Number,
    required:true
}
});

module.exports=mongoose.model("Users",userschema);