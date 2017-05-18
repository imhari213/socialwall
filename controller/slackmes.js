

module.exports = function(app,express,path,Slack,WebClient) {



webhookUri = "https://hooks.slack.com/services/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";
slack = new Slack();
slack.setWebhook(webhookUri);
var token="xoxp-51267639872-87126752229-150684303444-70e80143f297f563bdd496ae7661018a";
var web = new WebClient(token);
app.use(express.static('views'));

app.get('/slack' , function(req,res)
{
  slack.webhook({
  channel: "demo",
  username: "hari",
  icon_emoji: ":ghost:",
  text: "it's an automatic generated msg from Nodejs :)"
}, function(err, response) {
  console.log(response);
 
});
});


app.get('/teams' , function(req,res)
{
 	web.channels.list(function(err, info) {
   if (err) {
       console.log('Error:', err);
   } else {
       for(var i in info.channels) {
           console.log(info.channels[i].name);
       }
   }
});	
});

}