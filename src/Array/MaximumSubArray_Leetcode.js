/*53. Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
Kadane's Algorithm*/

function maxSubArray(arr) {
    let maxNum = arr[0]
    let ans = arr[0]
    for (let i = 0; i < arr.length; i++) {
        maxNum = Math.max(arr[i], maxNum + arr[i])
        ans = Math.max(ans, maxNum)
    }
    return ans
}

//input =[-2, 1, -3, 4, -1, 2, 1, -5, 4]
//output = 6