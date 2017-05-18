

module.exports = function(app,express,path,db,Posts) {

app.use(express.static('views'));
app.get('/wall' , function(req,res){

 var cursor =db.collection('posts').find();
           postsuser = [];
           

	console.log(sess.Emailid);
	console.log(sess);
	username = sess.user;
	

   var dateObj = new Date();
    month = dateObj.getUTCMonth() + 1; //months from 1-12
    day = dateObj.getUTCDate();
    year = dateObj.getUTCFullYear();

console.log(month);
console.log(day);
console.log(year);

	//console.log(sess.user);
		if(sess.Emailid){
		     console.log(sess.Emailid);
         console.log(sess.ObjectIdn);
          console.log(username);



       

 var postcount = db.collection('posts').find({},{"Post" :1});  
  postcount.count(function(error,object) {
              
              c=object; 
            console.log(c);


         db.collection('posts').find();



        new Promise((resolve, reject) => {

          //do query here and put the output value below


     
         

    // return new promise(
      cursor.each(function(error,object){
    //  var counti =   Posts.count(object.Post,function(err,object){
             // if(err){
             //     console.log("error");
             // }
             // else{
             //  console.log(object);
             // }

       //    });

             // console.log(object);
             if(!object){
              //console.log("No Posts To Show");
           }
           else {

                 // var len=cursor.Post.length;
       //  console.log("in");
                //cursor.count
                    // console.log("Object printing: " +object);
                    // console.log("posts"+postsuser)
                      postsuser.push(object.Post);
                      //console.log(postsuser[i]);
                       // console.log(postsuser[i-1]);
                     // console.log(postsuser.length);
                      //console.log("hari");
                   

                  

                   
       //  console.log("out");
                   // Name=object.Name; 
                   // Post=object.Post;                        
                   // console.log("Posted By "+Name);
                   // console.log(Post);
                   // app.set('views', './views');
                   // app.set('view engine', 'ejs');
                   // app.use(express.static(path.join(__dirname,'assets')));
                   // res.render('wall.ejs' );


             
          resolve(postsuser) //output value
            

         }
           // console.log("tarts here");
           //       console.log(postsuser[12]);
           //        for(j=0;j<postsuser.length;i++) //cursor.count
           //           {
                      
           //            console.log(postsuser[j]);
           //             // console.log(postsuser[i-1]);
           //           // console.log(postsuser.length);
           //            //console.log("hari");
           //         }
                
           });

        }).then((resolvedValue) => {
          //do stuff with the value obtained
             app.set('views', './views');
     app.set('view engine', 'ejs');
     app.use(express.static(path.join(__dirname,'assets')));
         res.render('wall.ejs'); 
          console.log(resolvedValue)
        }).catch((err) => {
          //err
          console.log(err)
        })











//
    
 	
         });
 	
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