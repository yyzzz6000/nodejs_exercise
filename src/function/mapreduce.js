module.exports = function arrayMap(arr, fn) {
   return arr.reduce((obj,element) => {
       obj.push(fn(element));
       return obj;
   },[]);
}