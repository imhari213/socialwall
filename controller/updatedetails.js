module.exports = function(app,express,path,db,mongoose,upload) {

app.post('/updatedetails',function(req,res){

  var obj=mongoose.mongo.ObjectId(req.body.object_id);
  
  var loc=req.body.PreferredLocation;

   db.collection('dudes').updateOne(
      { "_id" : obj },
      { $set: { "Password": req.body.confirm_password,"Name": req.body.first_name,"LastName":req.body.last_name,"Email":req.body.email,"PreferredLocation":loc,
      "SalaryExpected":req.body.Salary,"Expertise":req.body.Expertise,"Num":req.body.phone }},{ upsert:true, returnNewDocument : true },
      function(err,object) {
         if(!object){
              console.log("not updated");
         }
         else {
        // 	console.log(object);
         	console.log("updated successfully");
         	//	console.log("login with new password");
	        //    app.set('views', './views');
          //      app.set('view engine', 'ejs');
           //     app.use(express.static(path.join(__dirname,'assets')));
           //     res.render('showupdate.ejs' );
         }
   });
	       
       
         db.collection('dudes').findOne({ "_id" : obj },function (error,object)  {
           console.log(object);
            if(!object){
                console.log("Internal Server Error");
            }
            else {
                  
                     Name=object.Name;
                 LName=object.LastName;
                 Email=object.Email;
                     Password=object.Password;
                  Num= object.Num;
                 Obj=object._id;
                 Birthday=object.Birthday;
                 country=object.Country;
                 occupation=object.Occupation;
                 experience=object.Experience;
                 tweet=object.Twitter;
                 PreferredLocation=object.PreferredLocation;
                 app.set('views', './views');
                app.set('view engine', 'ejs');
               app.use(express.static(path.join(__dirname,'assets')));
                res.render('showupdate.ejs' );
       }

});

//    app.post('/uploadphoto', function(req, res) {
   

//   var multer  = require('multer');


// var storage = multer.diskStorage({ //multers disk storage settings
//        destination: function (req, file, cb) {
//         console.log("hari");
//            cb(null, 'uploads/');
//        },
//        filename: function (req, file, cb) {
//            var datetimestamp = Date.now();
//            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
//        }
//    });


//     var upload = multer({ //multer settings
//        storage: storage
//    }).single('file');
   



//     var obj=mongoose.mongo.ObjectId(req.body.object_id);

//        upload(req,res,function(err){
//       db.collection('dudes').updateOne({"_id": obj}, {$set: {profilepic: req.file.pic}}, {new: true}, function(err, object) {
//         if(object)
//         {
//             res.render('show.ejs' );
           
//         }
//         else{
//             console.log("not updated");
//         }
//     })
//  });
// });
});
 


}