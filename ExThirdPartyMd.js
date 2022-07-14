var exp = require('express');
var bp = require('body-parser');

var app = exp();

app.use(bp.urlencoded({extended: false}));

app.listen(8000,function(){
	console.log("exp app started");
});

app.get('/login',function(req,res){
       res.sendFile(__dirname+"/Login2.html");
});

app.post('/logincheck',function(req,res){
	//need to access req.body
	//defaultly- req.query

	if(req.body.name=="kishor" && req.body.Password=="kk123")
	{
		res.writeHead(200,{'content-type':'text/html'});
		res.write("<h2> Successful </h2>");
		res.write("<h3> Welcome "+req.body.name+" </h3>");
		res.end();
	}
	else
	{
		res.redirect('/login');
    }
		
});



app.all('*',function(req,res){
	res.send("Invalid URL !!!");
});