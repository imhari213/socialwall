

module.exports = function(app,express,path,db,UserReg) {
app.post('/regst', function(req,res){
    
      
 console.log(req.body.Name);
 console.log(req.body.Email);
 console.log(req.body.Pass);
 console.log(req.body.LName);
 console.log(req.body.Number);

    
    // Schema
   
    // Model

    // Add in collection
    var UserAdd = new UserReg({
        Name: req.body.Name,
        LastName: req.body.LName,
        Email: req.body.Email,
        Password: req.body.Pass,
  		Num: req.body.Number,
        Birthday: req.body.bday,
        Country: req.body.coun,
        Occupation: req.body.occupation,
        Experience: req.body.exp,
        Twitter: req.body.tweet
    });
       
   
    // Save
    console.log(req.body.occupation);
    
    UserAdd.save(function (err) {
        if (err) return console.log(err); 
        else
             console.log("saved");
                app.set('views', './views');
                app.set('view engine', 'ejs');
        	    app.use(express.static(path.join(__dirname,'assets')));
               res.render('login.ejs' );
});                                                              
});
}
