var http = require('http'),
    async = require('async');

async.map(process.argv.slice(2), function (url, cb) {
    http.get(url, function(res){
        var body = "";
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function () {
            return cb(null, body);
        });
    }).on('error', function (err){
        cb(err);
    })
}, function(err, data){
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});