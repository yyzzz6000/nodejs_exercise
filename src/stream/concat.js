var concat = require('concat-stream');

process.stdin.pipe(concat(function (body){
    "use strict";
    console.log(body.toString().split('').reverse().join(''));
}));