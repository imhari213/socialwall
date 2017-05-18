module.exports = function(app,express,path,db,mongoose,upload) {

 app.post('/updatedetailsphoto', upload.any(),function(req,res){
          console.log("hello");
          console.log("Photo uploaded");
           res.render('showupdate.ejs' );
          // res.render('in.ejs');     


   });


}