

module.exports = function(app,express,path,db,crypto) {

app.post('/update',function(req,res){

 
if(req.body.New==req.body.cnew)
{

 var algorithm = 'aes256';
   var key = 'hari';
   

    var text = req.body.secret;
     var tex = req.body.secret;
     console.log(tex);
     console.log(tex);

    var decipher = crypto.createDecipher(algorithm, key);
    var decrypted = decipher.update(tex, 'hex', 'utf8') + decipher.final('utf8');
var mail=decrypted;
	console.log(mail);
  console.log(mail);
  console.log(mail);
   db.collection('dudes').updateMany(
      { "Email" : mail },
      { $set: { "Password": req.body.cnew } },function(err,object) {
         if(!object){
              console.log("not updated");
         }
         else {
         	console.log(object);
         	console.log("updated successfully");
         		console.log("login with new password");
	            app.set('views', './views');
                app.set('view engine', 'ejs');
                app.use(express.static(path.join(__dirname,'assets')));
                res.render('login.ejs' );
         }
   });
}
else
{
	            app.set('views', './views');
                app.set('view engine', 'ejs');
                app.use(express.static(path.join(__dirname,'assets')));
                res.render('newpassword.ejs' );
}

});
}