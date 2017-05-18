

var mongoose = require('mongoose');

var msgSchema  = mongoose.Schema({
   Name : {
       type:String,
       unique:false
      // required: true
   },

   Id : {
       type:String,
       unique:false
      // required: trues
   },

   Post : {
       type:String,
      // required: true,
       unique:false
   },
   
  
   
  
   
});

module.exports  =  mongoose.model('posts', msgSchema);