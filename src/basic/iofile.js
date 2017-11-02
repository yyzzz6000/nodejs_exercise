const fs = require('fs');
//const { URL } = require('url');

//var count = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;

// fs.readFile(file, 'utf8', callback) can also be used
var path = process.argv[2];
var suffix = process.argv[3];
console.log(path);
var count = 0;
fs.readdir(path, function (error, files){
    if (error) {
        console.log(error);
    } else {
        for (var file in files) {
            if (file.substring(file.lastIndexOf('.') + 1) === suffix){
                count++;
            }
        }
    }
});
