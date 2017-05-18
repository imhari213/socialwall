module.exports = function(app,express,path,nodemailer,transporter) {

app.post('/send', function(req,res){
    
    var fmail=req.body.send;

	var mailOptions = {
    from: 'imhari213@rediffmail.com', // sender address
    to:    req.body.send, // list of receivers
    subject: 'Password Reset Link', // Subject line
    text: 'Hi', // plain text body
    html: '<b>In soon we will send you the Reset password Link Thank you for choosing    .....Hari :)</b>' // html body
};
 transporter.sendMail(mailOptions,  (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
   res.render('mail.ejs');  
});
});
}