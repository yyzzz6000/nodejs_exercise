const http = require('javascript/http/http');

var doRequest = function(urls, index){
    http.get(urls[index], function(resp){
        resp.setEncoding('utf8');
        var collection = '';
        resp.on('error', function (err) {
            console.error(err);
        });

        resp.on('data', function(data){
            collection += data;
        });

        resp.on('end', function (){
            index++;
            console.log(collection);
            if (index < urls.length){
                doRequest(urls, index);
            }
        });
    })
}
doRequest(process.argv, 2);