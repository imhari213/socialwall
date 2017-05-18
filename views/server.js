var ejs=require('ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var express = require('express'),app=express();
app.use(express.static(__dirname + '/public'));
var app = express();
var session = require('express-session');
var validator = require('express-Validator');
var db = mongoose.connection;
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(validator());
app.use(session({secret: 'ssshhhhh'}));
var path = require('path');
app.use(express.static(path.join(__dirname)));
var sess;


app.get('/' , function(req,res){
     var express=require('express');
   
    res.sendFile(__dirname + 'index.html',{success: false, errors: req.session.errors});
    });



app.post('/regst', function(req,res){
     sess=req.session;
      console.log("name" + req.body.Name);
    console.log("Email" + req.body.Email);
    console.log("Password" + req.body.Pass);
    console.log("Number" + req.body.Num);
   var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log("connected.")     
    });
    // Schema
    console.log("hari")
    var RegSchema = mongoose.Schema({
        Name: String,
        Email: String,
        Pass: String,
        Num: Number,
        reg_time : {
            type : Date, default: Date.now
        }
    }, { collection: 'mycollections' });

    // Model
    var UserReg = mongoose.model('UserReg', RegSchema);

    // Add in collection
    var UserAdd = new UserReg({
        Name: req.body.Name,
        Email: req.body.Email, 
        Pass: req.body.Pass,
        Num: req.body.Num,
    });
       
   
    // Save
    console.log("Saving")
    UserAdd.save(function (err) {
        if (err) return console.log(err); 
        else
            res.render('login.ejs' , {"mess":"succesfuly registered"} );
});
});


app.post('/login',function(req,res){
    sess.email=req.body.Email;
   var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function (callback) {
        console.log("connected.")
          });
           db.collection('mycollections').findOne({"Name": req.body.Name , "Email" :sess.email },function (error,object)  {
            if(!object){
                res.render('login.ejs',{"mess": "Invalid email ID or username"});
            }
            else {
                   req.session.authenticated = true;
                    console.log(object._id);
                    console.log(object.Name);  
                    console.log(object.Email);
                    console.log(object.Num);
                    /*var e=object.Email;
                   
                    var id=object._id;
                    var na=object.Name;*/
                    res.render('show.ejs' , {"Name":object.Name ,"Email":object.Email,"Num":object.Num,"Obj":object._id}); 
                
            }
           });
           
       
});

	app.post('/logout', function (req, res, next) {
		delete req.session.authenticated;
		res.redirect('/login');
	});


app.listen(8005, function() {
  console.log("Server is running on 8005!");
});  