/**
 * Implement Reduce method
 */

Array.prototype.myReduce = function (callback) {
    let item = 0;

    for (let i = 0; i < this.length; i++) {
        item = callback(item, this[i])
    }

    return item;
}

let a = [2, 4, 3].myReduce((total, a) => total + a);
console.log("a=", a);