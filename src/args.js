// Also be aware that all elements of process.argv are strings and you may
// need to coerce them into numbers. You can do this by prefixing the
// property with + or passing it to Number(). e.g. +process.argv[2] or
// Number(process.argv[2]).

var args = process.argv;
var sum = 0;
for (var i = 2; i < args.length; i++){
    //console.log(+args[i]);
    sum = sum + +args[i]; // equals to Number(args[i])
}
console.log(sum);


