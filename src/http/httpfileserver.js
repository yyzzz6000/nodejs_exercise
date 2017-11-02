var http = require('http/http');
var fs = require('fs');
var net = require('net');

// create http server
var port = Number(process.argv[2]);
var file = process.argv[3];
var server = http.createServer(function(req, res){
    res.writeHead(200, { 'content-type': 'text/plain' })
    var readable = fs.createReadStream(file);

    readable.on('data', function (data){
        res.write(data);
    })
    readable.on('end', function (){
        res.end();
    })
});
server.listen(port);