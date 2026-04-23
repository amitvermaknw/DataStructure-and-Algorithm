/**
 * 7. Reverse Integer
Solved
Medium
Topics
premium lock icon
Companies
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
 
Constraints:

-231 <= x <= 231 - 1
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    if (x === 0) return x

    let res = []
    let isNegative = false

    if (x < 0) {
        x = x * -1
        isNegative = true
    }

    while (x > 0) {
        let rem = Math.abs(x % 10)
        x = Math.floor(x / 10)
        res.push(rem)
    }

    let result = parseInt(res.join(""))
    if (isNegative) {
        result = result * -1
    }

    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (result > INT_MAX || result < INT_MIN) {
        return 0;
    }
    return result


};