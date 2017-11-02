var duplexer2 = require('duplexer2');
var through = require('through2');

module.exports = function (counter) {
    // return a duplex stream to count countries on the writable side
    // and pass through `counter` on the readable side
    var countries = {};

    var duplex = duplexer2({objectMode: true}, through.obj(function (data, _, next) {
        countries[data.country] = (countries[data.country] || 0) + 1;
        next();
    }, function (done) {
        counter.setCounts(countries);
        done();
    }), counter);

    return duplex;
};