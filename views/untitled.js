

module.exports = function(app,express,path) {

app.use(express.static('views'));
app.get('/wall' , function(req,res){
	
 		 app.set('views', './views');
 		 app.set('view engine', 'ejs');
 		 app.use(express.static(path.join(__dirname,'assets')));
         res.render('login.ejs'); 
 		

});
}