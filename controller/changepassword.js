

module.exports = function(app,express,path,fs) {

app.use(express.static('views'));
app.get('/newpassword' , function(req,res){
	      var te = req.query.Id;
	      app.set('views', './views');
 		  app.set('view engine', 'ejs');
 		  app.use(express.static(path.join(__dirname,'assets')));
          res.render('newpassword.ejs',{ dynamic_textbox: te }); 
 		 

});
}