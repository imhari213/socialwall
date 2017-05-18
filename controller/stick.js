

module.exports = function(app,express,path,db,Posts) {

  // var promise = require('promise');

app.post('/stick', function(req,res){
   

   
    var cursor =db.collection('posts').find();
           var postsuser = {};
 //console.log(req.body.Name);
// console.log(req.body.Email);
 //console.log(req.body.Pass);
// console.log(req.body.LName);
// console.log(req.body.Number);

    
    // Schema
   
    // Model

    // Add in collection
    var Message = new Posts({
        Name: sess.user,
        Id: sess.ObjectIdn,
        Post: req.body.postmsg
        
    });
       
   
    // Save
    console.log(req.body.postmsg);
    // c=function(){
    // return new promise
    Message.save(function (err) {
        if (err) return console.log(err); 
        else      
              console.log("saved");
              app.set('views', './views');
              app.set('view engine', 'ejs');
              app.use(express.static(path.join(__dirname,'assets')));
              res.render('wall.ejs' );


});
 
     console.log("Finding Query iS Fired");
      var postcount = db.collection('posts').find({},{"Post" :1});  

        postcount.count(function(error,object) {
              
              c=object; 
            console.log(c);

     

        //console.log(c);

  // d =function(p){  
    db.collection('posts').find();

 for(i=0;i<=c;i++)
  {
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
                    
                      postsuser[i]=object.Post;
                      console.log(postsuser[i]);
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
    }



    });

//      c().then(function(inp){
//   return d(inp)
//        }).catch(function(error){
//  console.log(error)
// });



                  
}); 
}
