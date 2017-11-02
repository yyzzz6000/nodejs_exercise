// var through = require('through2');
// var split = require('split');
// var lineCount = 1;
// process.stdin.pipe(split()).pipe(through(function (line, _, next){
//     if (lineCount % 2 === 1) {
//         this.push(line.toString().toLowerCase());
//         this.push('\n');
//     } else {
//         this.push(line.toString().toUpperCase());
//         this.push('\n');
//     }
//     lineCount++;
//     next();
// })).pipe(process.stdout);


var through = require('through2');
var split = require('split');

var lineCount = 0;
var tr = through(function (buf, _, next) {
    var line = buf.toString();
    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    lineCount ++;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout)
;