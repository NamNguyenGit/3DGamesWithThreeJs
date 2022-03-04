const app = require('express')();
const http = require('http').Server(app);

app.get('/', function(req,res){
    res.send("heleo")
})

http.listen(3000, function(){
    console.log("listen on port 3000")
})