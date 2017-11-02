
function curryN(fn, n) {
    // SOLUTION GOES HERE
    n = n || fn.length
    return function (args){
        if (n <= 1) {
            return fn(args)
        } else {
            return curryN(fn.bind(null, args), n - 1)
        }
    }
}

module.exports = curryN