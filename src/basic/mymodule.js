const fs = require('fs');
const path = require('path');

module.exports = function (folder, ext, callback){
    fs.readdir(folder, function (err, list){
        if (err) {
            callback(err);
        } else {
            list = list.filter(function (file) {
                return path.extname(file) === '.' + ext;
            })
            callback(null, list);
        }
    });
};