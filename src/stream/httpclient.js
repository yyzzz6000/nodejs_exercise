var request = require('request');

process.stdin.pipe(request.post('http://localhost:8099')).pipe(process.stdout);

// var request = require('request');
// var r = request.post('http://localhost:8099');
// process.stdin.pipe(r).pipe(process.stdout);

