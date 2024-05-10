/**
 * Implement my own map method
 */

Array.prototype.myMap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]))
    }
}
let a = [2, 4, 3].myMap(item => item * 4)
console.log("a=", a);

