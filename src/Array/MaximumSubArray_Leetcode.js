/*53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
Kadane's Algorithm*/
var maxSubArray = function (nums) {
    let maxVal = nums[0];
    let accum = 0;

    for (let i of nums) {
        if (accum < 0) {
            accum = 0
        }
        accum = accum + i
        maxVal = Math.max(maxVal, accum)
    }
    return maxVal
};

//input =[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//output = 6