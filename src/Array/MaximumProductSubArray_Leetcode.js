/**
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, 
 * and return the product The test cases are generated so that the answer will fit in a 32-bit integer.
A subarray is a contiguous subsequence of the array.
Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
 */

var maxProduct = function (nums) {
    let n = nums.length - 1;
    let ans = nums[0];
    let l = 1, r = 1;

    for (let i = 0; i < nums.length; i++) {
        l = (l ? l : 1) * nums[i];
        r = (r ? r : 1) * nums[n - i];
        ans = Math.max(ans, Math.max(l, r));
    }
    return ans
};