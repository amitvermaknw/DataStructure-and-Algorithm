/**
 * Implement filter method
 */

Array.prototype.myFilter = function (callback) {
    let arr = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]) == this[i]) {
            arr.push(this[i])
        }
    }

    return arr;
}

let a = [2, 4, 3].myFilter(item => item === 2 ? item : null);
console.log("a=", a);
