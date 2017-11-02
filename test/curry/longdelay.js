const assert = require('assert');
var delay = require('../../src/curry/longdelay')

describe('Delay', function() {
    describe('delay one input', function() {
        it('should return a function', function() {
            assert.equal(typeof delay(1),  'function')
        });
    });

    describe('delay two inputs', function() {
        it('should return a function', function() {
            assert.equal(typeof delay(1)(2),  'function')
        });
    });

    describe('delay two inputs + empty input', function() {
        it('should return the sum', function() {
            assert.equal( delay(1)(2)(),  3)
        });
    });
});