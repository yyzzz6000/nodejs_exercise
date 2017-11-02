const assert = require('assert');
var curryN = require('../../src/function/curry')

var add = function (a, b, c) {
    return a + b + c
}

describe('Curry', function() {
    describe('add', function() {
        it('should return 6', function() {
            assert.equal(curryN(add)(1)(2)(3), 6)
        });
    });

    describe('add', function() {
        it('should return 6', function() {
            assert.equal(typeof curryN(add)(1), 'function')
        });
    });
});