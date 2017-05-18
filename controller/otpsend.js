module.exports = function(app,express,path,nodemailer,transporter,otpGenerator,db,validOptions,tl,BulkSMS,SMS,messagebird,client) {

app.post('/otpsend', function(req,res){
    
    // var algorithm = 'aes256';
    // var key = 'hari';
    // var text = req.body.send;
    // var cipher = crypto.createCipher(algorithm, key);
    // var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    
    var no = req.body.phno;
console.log(no);
   
           db.collection('dudes').findOne({"Num":req.body.phno},function (error,object)  {
              
               if(!object){
                console.log("number not found");
                  app.set('views', './views');
                app.set('view engine', 'ejs');
                app.use(express.static(path.join(__dirname,'assets')));
                res.render('otp.ejs' );
            }
            else {

                // console.log(validOptions);
                // console.log(tl);

                    var otpn=otpGenerator.generate(6, { upperCase: false, specialChars: false });
                        console.log(otpn); 
                        // nexmo.message.sendSms(8978325778, no,otpn,
                        //              (err, responseData) => {
                        //            if (err) {
                        //                 console.log(err);
                        //                } else {
                        //                 console.dir(responseData);
                        //                   }
                        //                  }
                        //             );

                        // tl.sendSMS('no','otpn', 'hari', function (err, data) 

                        //     {
                        //             if(err){
                        //                 console.log(err);
                        //             }
                        //             else{
                        //                 console.log("Message Sent Successfully");
                        //             }



                        //     });



                            client.sendMessage({

                                          to: '+918978325778', // Any number Twilio can deliver to
                                          from: '+16175006140', // A number you bought from Twilio and can use for outbound communication
                                          body: 'otpn' // body of the SMS message

                                            }, function(err, responseData) { //this function is executed when a response is received from Twilio

                                         if (!err) {
                                         console.log(err);
                                              }
                                           else {
                                             //console.log(responseData.from); // outputs "+14506667788"
                                             console.log(responseData);
                                                         console.log("successfully sent")
                                              }


                                        });

                   //        var params = {
                   //                   'originator': 'messagebird',
                   //                      'recipients': [
                   //                                      '8978325778'
                   //                                                       ],
                   //                      'body': otpn
                        
                   //                      };

                   // console.log("Successfully");

                     //    SMS.send(no,otpn, (err, result) => {
                     //     if (err){
                     //     return console.error(err)
                     //    }

                     //    else{
                     //     console.log("Message sent Successfully");
                     // }
                     //        });



            // }


              }

//     var fmail=req.body.send;
//     var link="http://localhost:8005/newpassword?Id="+encrypted;
// 	var mailOptions = {
//     from: 'imhari213@rediffmail.com', // sender address
//     to:    req.body.send, // list of receivers
//     subject: 'Password Reset Link', // Subject line
//     text: 'Hi', // plain text body
//     html: "<a href="+link+"><b>click here Link to Reset Password</b></a><form><input type='hidden'  placeholder='Enter your Email Id' required='required' name='send'/></from>" // html body
// };
//  transporter.sendMail(mailOptions,  (error, info) => {
//     if (error) {
//         return console.log(error);
//     }
//     res.render('mail.ejs');
//     console.log('Message %s sent: %s', info.messageId, info.response); 
//     console.log(encrypted);
   
// });
     });
       });
}
