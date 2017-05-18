module.exports = function(app,express,path,db,UserReg) {
app.get('/send', function(req,res){

	sendgrid.send({
		to:        req.body.remail,
	 	from:      'imhari213@gmail.com',
	 	subject:    'test email',
	 	text:        'my first demo email'  
	 },function(err){
	 	if (err) {
	 		return res.send('error');
	 	}
	 	else{
	 		console.log('succesfully sent');
	 	}
	 });
	});

}