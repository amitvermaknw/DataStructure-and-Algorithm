/**
 * 367. Valid Perfect Square
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.


Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let res = false
    function calculate(left, right) {
        let target = left * right

        if (target === num && left === right) {
            if (Number.isInteger(left) && Number.isInteger(right)) {
                res = true
            } else {
                res = false
            }
        } else if (target < num) {
            calculate(left + 1, right + 1)
        } else if (target > num) {
            res = false
        }
    }

    calculate(1, 1)
    return res
};