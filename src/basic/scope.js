// Scope is the set of variables, objects, and functions you have access to.
//
//     JavaScript has two scopes: global and local. A variable that is declared
// outside a function definition is a global variable, and its value is
// accessible and modifiable throughout your program. A variable that is
// declared inside a function definition is local. It is created and
// destroyed every time the function is executed, and it cannot be accessed
// by any code outside the function.


//   IIFE, Immediately Invoked Function Expression, is a common pattern for
//
//  creating local scopes.

var a = 1, b = 2, c = 3;

(function firstFunction(){
    var b = 5, c = 6;

    (function secondFunction(){
        var b = 8;
        console.log("a: "+a+", b: "+b+", c: "+c);
        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;

            })();
        })();
    })();
})();