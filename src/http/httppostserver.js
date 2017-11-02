var http = require('http/http');

var server = http.createServer(function(req, res){
    "use strict";
    if (req.method == 'POST') {
        let text = '';
        req.on('data', (chunk) => {
            text += chunk.toString().toUpperCase();
        }).on('end', () => {
            res.writeHead(200, { 'content-type': 'text/plain' });
            res.write(text);
            res.end();
        });
    } else {
        res.end();
    }
});
server.listen(Number(process.argv[2]));