const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:{
        type:Number,
        unique:true
    },
    emailId:String,
    password:String,
    gender:{
        type:String,
        enum:["male","female","others"] ,
        require:true ,     
    },
    isDeleted:{type:Boolean,default:false},
    age:Number
    

},{timestamps:true} )

module.exports=mongoose.model('userCollection',userSchema)