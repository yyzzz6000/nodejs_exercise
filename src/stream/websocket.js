var ws = require('websocket-stream');
var Stream = require('stream');

var stream = ws('ws://localhost:8099');
stream.end('hello\n');