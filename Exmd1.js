var exp = require('express');
var app = exp();

app.use(exp.static('images'));
app.get('/login',function(req,res){
 res.sendFile(__dirname+"/Login.html");

});
app.listen(9700,function(){
	console.log("exp server started at 9700");
	
});