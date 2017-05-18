

module.exports = function(app,express,path,db,mongoose) {



app.post('/login',function(req,res){
 // var _id = mongoose.mongo.ObjectId("4eb6e7e7e9b7f4194e000001");
	sess=req.session;
	 sess.user=req.body.uname;
	 console.log(req.body.uname);
  console.log(req.body.upassword);
  console.log(sess.user);
 

           db.collection('dudes').findOne({"Name":req.body.uname, "Password" :req.body.upassword},function (error,object)  {
           console.log(object);
            if(!object){
            	  app.set('views', './views');
                app.set('view engine', 'ejs');
                app.use(express.static(path.join(__dirname,'assets')));
                res.render('login.ejs' );
            }
            else {
                   req.session.authenticated = true;
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
                    console.log(object._id);
                    console.log(object.Name);  
                    console.log(object.Email);
                    console.log(object.Num);
                    console.log(object.Password);
                    console.log(PreferredLocation);
                    /*var e=object.Email;
                   
                    var id=object._id;
                    var na=object.Name;*/
                    res.render('show.ejs'); 
                    req.session.user = req.param('Name'); //session.user=Name;

                    req.session.uid = req.param('Obj'); //session.uid=Obj;
                

                  sess.Emailid=object.Email;
                  sess.user=object.Name;
                  //console.log(session.user);
                  sess.ObjectIdn=Obj;
                  console.log("session variables");
                  console.log(sess.Emailid);
                  console.log(sess.ObjectIdn);
                  //req.sess.save()
            }
           });
           
       
});

}