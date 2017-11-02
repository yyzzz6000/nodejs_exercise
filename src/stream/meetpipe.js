// `fs.createReadStream()` takes a file as an argument and returns a readable
// stream that you can call `.pipe()` on. Here's a readable stream that pipes its
// data to `process.stderr`:
var fs = require('fs');
fs.createReadStream(process.argv[2]).pipe(process.stdout);