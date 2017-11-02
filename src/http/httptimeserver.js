var net = require('net');

function fillZero(num) {
    return num < 10 ? '0' + num : num;
}
function getNow() {
    var date = new Date();
    return date.getFullYear()
        + '-'
        + fillZero(date.getMonth() + 1)      // starts at 0
        + '-'
        + fillZero(date.getDate())    // returns the day of month
        + ' '
        + fillZero(date.getHours())
        + ':'
        + fillZero(date.getMinutes());
}
// create a raw TCP server
// The net module has a method named net.createServer() that takes a
// function. The function that you need to pass to net.createServer() is a
// connection listener that is called more than once. Every connection
// received by your server triggers another call to the listener. The
// listener function has the signature:   function listener(socket) { /* ... */ }
// net.createServer() also returns an instance of your server. You must call
// server.listen(portNumber) to start listening on a particular port.

var server = net.createServer((socket) => {
    // socket handling logic
    socket.end(getNow() + '\n');
    }).on('error', (err) => {
        // handle errors here
        throw err;
    });

server.listen(Number(process.argv[2]));