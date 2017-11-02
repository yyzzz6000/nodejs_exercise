var test = require('tape');
var repeatCallback = require(process.argv[2]);


test('', function(t){
    "use strict";
    var count = 0;
    t.plan(4);
    repeatCallback(4, function(){
        t.pass('callback called')
    });
});