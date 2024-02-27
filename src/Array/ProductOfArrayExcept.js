/**
 * Product of Array Except Self
 * Given an integer array nums, return an array answer such that answer[i] is equal to 
 * the product of all the elements of nums 
 * except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 * 
 */

var productExceptSelf = function (nums) {
    let res = new Array(nums.length);
    res.fill(1);

    // Calculate the product of elements before the current index
    let pre = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = res[i] * pre;
        pre = pre * nums[i];
    }

    // Calculate the product of elements after the current index
    let post = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] = res[i] * post;
        post = post * nums[i];
    }

    return res;
};