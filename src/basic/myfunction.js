var module = require('./mymodule.js');

var folder = process.argv[2];
var ext = process.argv[3];

module(folder, ext, function(err, files){
    if (err) {
        console.error(err);
    } else {
        files.forEach(function(file){
            console.log(file);
        });
    }
})