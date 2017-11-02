var trumpet = require('trumpet');

var through = require('through2');

var tr = trumpet();
var load = tr.select('.loud').createStream();

load.pipe(through(function(buf, _, next){
    this.push(buf.toString().toUpperCase());
    next();
})).pipe(load);

process.stdin.pipe(tr).pipe(process.stdout);