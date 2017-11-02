var http = require('http/http');
var url = require('url');

function getDateString(isoString){
    "use strict";
    var date = new Date(isoString);
    var result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
    return JSON.stringify(result);
}

function getMilliseconds(isoString) {
    "use strict";
    return JSON.stringify({
        unixtime: Date.parse(isoString)
    });
}

var server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        var reqUrl = url.parse(req.url, true);
        var iso = reqUrl.query.iso;
        //console.log(reqUrl.path);

        if (iso === undefined || iso === null) {
            res.end();
            return;
        }

        if (reqUrl.pathname === '/api/parsetime') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end();
        } else if (reqUrl.pathname === '/api/unixtime') {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(getMilliseconds(iso));
        } else {
            res.writeHead(404);
            res.end();
        }
    } else {
        res.end();
    }
});
server.listen(Number(process.argv[2]));


// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//     return {
//         hour: time.getHours(),
//         minute: time.getMinutes(),
//         second: time.getSeconds()
//     }
// }
//
// function unixtime (time) {
//     return { unixtime: time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//     var parsedUrl = url.parse(req.url, true)
//     var time = new Date(parsedUrl.query.iso)
//     var result
//
//     if (/^\/api\/parsetime/.test(req.url)) {
//         result = parsetime(time)
//     } else if (/^\/api\/unixtime/.test(req.url)) {
//         result = unixtime(time)
//     }
//
//     if (result) {
//         res.writeHead(200, { 'Content-Type': 'application/json' })
//         res.end(JSON.stringify(result))
//     } else {
//         res.writeHead(404)
//         res.end()
//     }
// })
// server.listen(Number(process.argv[2]))
