var $http = require('http')
    , async = require('async')
    , fs = require('fs');

async.waterfall([
    function (cb) {
        fs.readFile(process.argv[2], "utf8", function(error, url) {
            if (error) {
                cb(error.message);
            } else {
                cb(null, url);
            }
        });
    },
    function (url, cb) {
        var body = '';
        $http.get(url, function (res){
            res.on('data', function(chunk){
                body += chunk.toString();
            });
            res.on('end', function(){
                cb(null, body);
            });
        }).on('error', function(err) {
            cb(err);
        });
    }
    ]
, function cb(error, result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});