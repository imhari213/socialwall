module.exports = function(app,express,path,nodemailer,transporter,crypto) {

app.post('/send', function(req,res){
    
    var algorithm = 'aes256';
    var key = 'hari';
    var text = req.body.send;
    var cipher = crypto.createCipher(algorithm, key);
    var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    

   

    var fmail=req.body.send;
    var link="http://localhost:8005/newpassword?Id="+encrypted;
	var mailOptions = {
    from: 'imhari213@rediffmail.com', // sender address
    to:    req.body.send, // list of receivers
    subject: 'Password Reset Link', // Subject line
    text: 'Hi', // plain text body
    html: "<a href="+link+"><b>click here Link to Reset Password</b></a><form><input type='hidden'  placeholder='Enter your Email Id' required='required' name='send'/></from>" // html body
};
 transporter.sendMail(mailOptions,  (error, info) => {
    if (error) {
        return console.log(error);
    }
    res.render('mail.ejs');
    console.log('Message %s sent: %s', info.messageId, info.response); 
    console.log(encrypted);
   
});
});
}