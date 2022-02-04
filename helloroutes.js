const { read } = require("fs");
var http = require("http");
const { builtinModules } = require("module");

var server = http.createServer(function(request,response){
    response.writeHead(200,{'content-type': 'text/html'});

    if (request.url === "/helloworld"){
        response.write("<h1>HELLO WITH HTML</h1>");
    }
    else if (request.url === "/homepage"){
        response.write("HOMEPAGE<br>");
    }
    response.end("HELLO MY MAN");
});


server.listen(3000);