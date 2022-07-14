var exp = require('express');
var app = exp();
var fs = require('fs');
var url = require('url');

app.use(function(req,res,next){
var p = url.parse(req.url,true).pathname;
	if(p != '/favicon.ico')
	{ 
     	var cdate = new Date();
	    var str = "Request received for "+p+" at "+cdate.toString()+"\n";
	    fs.appendFile("log.txt",str,function(err){
		if(!err) 
		{   //res.send("This Log is Saved into Database")	
			console.log("log generated");
		}
	 });
	}
	next();
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+"/Login.html");
})


app.get('/OOP',function(req,res){
 res.sendFile(__dirname+"/OOP.html");

});
app.listen(9000,function(){
	console.log("exp server started at 9000");
	
});