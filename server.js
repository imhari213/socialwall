var ejs=require('ejs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var express = require('express'),app=express();
app.use(express.static(__dirname + '/public'));
var passport = require('passport');
var LocaStrategy = require('passport-local').Strategy;
var app = require('express')();
var session = require('express-session');
var validator = require('express-Validator');
var db = mongoose.connection;
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static('views'));
app.set('view engine', 'ejs');
app.set('views',__dirname + '/views');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(validator());
var passReset = require('pass-reset');
passReset.expireTimeout(12, 'mins');
var crypto = require('crypto');
var assert = require('assert');
var Slack = require('slack-node');
var IncomingWebhook = require('@slack/client').IncomingWebhook;
var WebClient = require('@slack/client').WebClient;
var fileUpload = require('express-fileupload');
app.use(fileUpload());
var otpGenerator = require('otp-generator');
var messagebird = require('messagebird')('v0gztO6BTxx7vJ7gqcXDiU9NC');


var client = require('twilio')('65fa7cb54ea351c026692d648293c419', 'e34c86e61e3a4d5a8202efd02bb6ef9d');

var expect = require("chai").expect;
var tl = require('textlocal')(validOptions);
var validOptions = {

 // apikey: 'ku1dguKTXJc-DFHxUtMt05lEYb4NRmLyYNRbW7dkVL'


                username: 'haricm213@gmail.com',
                password: 'H@ri3296so'
 

  };
    var tl = require('textlocal')(validOptions);
  expect(tl.validConfig).to.be.true;




var BulkSMS = require('bulksms')
var SMS = new BulkSMS('hariprasad213', 'H@riprasad')

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


app.use(session({secret: 'ssshhhhh',
   	                // connect-mongo session store 
   	  proxy: true,
   	  resave: true,
  	  saveUninitialized: true
}));
var http = require('http');
var fs = require('fs');
var path = require('path');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport({
	 service: 'Gmail',
        auth: {
            user: 'dummytest471@gmail.com', // Your email id 'dummytest471@gmail.com',
            pass: 'dummytest3296' // Your password dummytest3296
        }	
});

var UserReg = require("./models/users");
var Posts = require("./models/posts");
var sess;

var router = express.Router();

var controller = require("./controller/index");
var loginc = require("./controller/login");
var logout = require("./controller/logout");
var registerl = require("./controller/registerl");
var Insertregisterl = require("./controller/Insertregisterl");
var update = require("./controller/update");
var reset = require("./controller/reset");
var otp = require("./controller/otp");
var remail = require("./controller/send");
var changepassword = require("./controller/changepassword");
var slackmes = require("./controller/slackmes");
var updatedetails = require("./controller/updatedetails");
var updatedetailsphoto = require("./controller/updatedetailsphoto");
var wall = require("./controller/wall");
var stick = require("./controller/stick");
var otpsend = require("./controller/otpsend");


controller(app,express,path);
loginc(app,express,path);
changepassword(app,express,path,fs);
logout(app,express,path);
registerl(app,express,path,db);
Insertregisterl(app,express,path,db,UserReg);
update(app,express,path,db,crypto);
reset(app,express,path);
otp(app,express,path);
remail(app,express,path,nodemailer,transporter,crypto);
otpsend(app,express,path,nodemailer,transporter,otpGenerator,db,validOptions,tl,BulkSMS,SMS,messagebird,client);
slackmes(app,express,path,Slack,WebClient);
updatedetails(app,express,path,db,mongoose,upload);
updatedetailsphoto(app,express,path,db,mongoose,upload);
wall(app,express,path,db,Posts);
stick(app,express,path,db,Posts);


app.get('/register' , function(req,res){
    
   app.use(express.static(path.join(__dirname,'assets')));
    res.render(__dirname + '/views/index.ejs',{success: false, errors: req.session.errors});
 });	

app.listen(8005, function() {
  console.log("Server is running on 8005!");
});  