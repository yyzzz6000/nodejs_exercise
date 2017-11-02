var http = require('javascript/http/http');

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    var collection = '';
    response.on('data', function(data){
        collection+=data;
    });
    response.on('error', console.error);
    response.on('end', function(){

        console.log(collection.length);
        console.log(collection);
    });
}).on('error', console.error);