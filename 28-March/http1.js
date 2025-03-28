var http=require("http");

http.createServer(function(req,res){
    res.write("Be Kind");
    res.end();
}).listen(3120);

