// var delay = function (arg1) {
//     var add = function (total) {
//         return function (arg2) {
//             return arg2 ? add(total + arg2) : total
//         }
//     }
//     return add(0)(arg1);
// }

var delay = (arg) => {
    var add = (prev) => (e) => e ? add(prev + e) : prev
    return add(0)(arg)
}
module.exports = delay