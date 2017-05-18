module.exports = function(app,express,path) {


	app.get('/otp' , function(req,res){
    
     app.set('views', './views');
     app.set('view engine', 'ejs');
 	 app.use(express.static(path.join(__dirname,'assets')));
     res.render('otp.ejs'); 
});
}