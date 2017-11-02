const fs = require('fs');
const path = require('path')

//const { URL } = require('url');

//var count = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;

// fs.readFile(file, 'utf8', callback) can also be used
var folder = process.argv[2];
var ext = '.' + process.argv[3];
fs.readdir(folder, function (err, files){
    if (err) {
        console.error(err);
    } else {
        files.forEach(function(file){
            if (path.extname(file) === ext) {
                console.log(file);
            }
        })
    }
});
