var http=require("http");
var fs=require("fs");
var readstream=fs.createReadStream('./demo.txt');


readstream.on('open',function(){
console.log("file as been opened")
});

http.createServer(function(req,res)
{
//res.writeHead(200,'Content-Type:html/text');
res.write("demo visual");
res.write(req.url);
res.end();
}).listen(9100);