
module.exports = function(app,express,path) {

app.get('/' , function(req,res){
	sess=req.session;
	console.log("index controller entered")
	    if(sess.user){
 		console.log("you are logged innbro:)");
 		res.render('show.ejs');  
	}
	else
 	{
 		 app.set('views', './views');
                app.set('view engine', 'ejs');
        	    app.use(express.static(path.join(__dirname,'assets')));
               res.render('index.ejs' );
 		}
});



}