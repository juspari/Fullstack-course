const { read } = require("fs");
var http = require("http");
const { builtinModules } = require("module");

var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type': 'text/html'});
    response.write("<h1>Hello World</h1>");
    response.write("<table><tr><th>Name</th><th>Address</th><th>City</th></tr><tr><td>Matti</td><td>Tietie</td><td>Turku</td></tr></table>");


    response.end("HELLO MY MAN");
});


server.listen(3000);
console.log("SERVER RUNNING AT");

