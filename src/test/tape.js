
var test = require('tape')
var fancify = require(process.argv[2]);

test('fancify', function(t){
    t.equal(fancify('Hello'), '~*~Hello~*~', 'Wraps a string in ~*~');
    t.equal(fancify('Hello', true),  '~*~HELLO~*~','Optionally makes it allcaps');
    t.equal(fancify('Hello', false, '!'),  '~!~Hello~!~','Optionally allows to set the character');
    t.end();
});