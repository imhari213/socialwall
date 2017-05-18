

module.exports = function(app,express,path) {
app.post('/logout', function (req, res, next) {
			req.session.destroy(function(err) {
  if(err) {
    	console.log(err);
  } 
  else {  
  		app.set('views', './views');
  		 app.set('view engine', 'ejs');
		app.use(express.static(path.join(__dirname,'assets')));
    	res.render('login.ejs'); 
	}
		});
});
}