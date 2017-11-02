var http = require('http');
var concat = require('concat-stream');

var server = http.createServer(function (req, rep){
    "use strict";
    if (req.method === 'POST'){
        rep.writeHead(200, { 'content-type': 'text/plain' });
        req.pipe(concat(function (body){
            rep.end(body.toString().toUpperCase());
        }))
    } else {
        rep.end('only post');
    }
});

server.listen(process.argv[2]);

// var http = require('http');
// var through = require('through2');
//
// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(through(function (buf, _, next) {
//             this.push(buf.toString().toUpperCase());
//             next();
//         })).pipe(res);
//     }
//     else res.end('send me a POST\n');
// });
// server.listen(parseInt(process.argv[2]));