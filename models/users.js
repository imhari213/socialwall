

var mongoose = require('mongoose');

var userSchema  = mongoose.Schema({
   Name : {
       type:String,
       unique:false
      // required: true
   },

   LastName : {
       type:String,
       unique:false
      // required: trues
   },
   
  Password : {
       type:String,
       unique:false
      // required: true
   },

   Email : {
       type:String,
       unique:false
      // required: true
   },

   Birthday : {
       type:String,
       unique:false
      // required: true
   },

   Country : {
       type:String,
       unique:false
      // required: true
   },

   Occupation : {
       type:String,
       unique:false
      // required: true
   },

   Experience : {
       type:String,
       unique:false
      // required: true
   },
   
   Twitter : {
       type:String,
       unique:false
      // required: true
   },

   Address : {
       type:String,
       unique:false
      // required: true
   },

   ProjectDescription : {
       type:String,
       unique:false
      // required: true
   },
   
   Industry : {
       type:String,
       unique:false
      // required: true
   },

   Qualification : {
       type:String,
       unique:false
      // required: true
   },

   Expertise : {
       type:String,
       unique:false
      // required: true
   },

   SalaryExpected : {
       type:String,
       unique:false
      // required: true
   },

   PreferredLocation : {
       type:String,
       unique:false
      // required: true
   },
    
   profilepic: 
   {
    type: String,
   default: 'default.jpg'
  },

   Num : {
       type:String,
      // required: true,
       unique:false
   },
   
  
   
  
   
});

module.exports  =  mongoose.model('dude', userSchema);