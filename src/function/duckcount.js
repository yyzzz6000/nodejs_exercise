function duckCount() {
    return Array.prototype.slice.call(arguments).filter(argument => Object.prototype.hasOwnProperty.call(argument, 'quack')).length;
}

module.exports = duckCount