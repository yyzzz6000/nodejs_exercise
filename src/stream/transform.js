var through = require('through2');
var tr = through(function (buf, encoding, next) {
    this.push(buf.toString().toUpperCase());
    next();
});
process.stdin.pipe(tr).pipe(process.stdout);