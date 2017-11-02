function reduce(arr, fn, initial) {
    // SOLUTION GOES HERE
    if (arr.length != 0) {
        return reduce(arr.slice(1), fn, fn(initial, arr[0]));
    } else {
        return initial;
    }
}

module.exports = reduce