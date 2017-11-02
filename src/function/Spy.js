function Spy(target, method) {
    var spy = {
        count: 0,
        original: target[method],
        stopSpy: function (){
            "use strict";
            target[method] = this.original;
        },
        startSpy: function () {
            target[method] = function (){
                spy.count++;
                return spy.original.apply(target, arguments);
            }
        }
    };
    spy.startSpy();

    return spy;
}

module.exports = Spy