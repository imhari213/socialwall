'use strict';

let mongoose = require('mongoose');

let userSchema  = mongoose.Schema({
   firstname : {
       type:String,
       unique:false
      // required: true
   },
   
   lastname : {
       type:String,
       unique:false
      // required: true
   },
   
   email : {
       type:String,
      // required: true,
       unique:true
   },
   
   
   password : {
   type:String,
   required: true,
   }  
   
});

module.exports  =  mongoose.model('mycollections', userSchema);