

module.exports = function(app,express,path) {

app.use(express.static('views'));
app.get('/log' , function(req,res){
	sess=req.session;
    if(sess.user){
 		console.log("you are logged innbro:)");
 		res.render('in.ejs');  
	}
	else
 	{
 		 app.set('views', './views');
 		 app.set('view engine', 'ejs');
 		 app.use(express.static(path.join(__dirname,'assets')));
         res.render('login.ejs'); 
 		}

});
}