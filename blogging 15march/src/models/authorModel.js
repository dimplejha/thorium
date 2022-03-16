const mongoose = require('mongoose');
const validator = require('validator');

const autherSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim: true,

    },
    lname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        enum:["mr","mrs","miss","Mr","Mrs","Miss"]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
          }
    },

    password:{
        type:String,
        required:true,
        
   trim: true,
   minlength: 7,
   validate(value){
      if(value.toLowerCase().includes('password')){
         throw new Error('Password cannot be the word `password`')
      }
   }
    }
},{timestamps:true} )

module.exports=mongoose.model('Author',autherSchema)