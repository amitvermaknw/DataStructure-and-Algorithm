/**
 * Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.
 * // Input: arr = [2, 1, 5, 1, 3, 2], k = 3
// Output: 9 (subarray [5,1,3])
 */

function maxSum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i]
    }
    maxSum = windowSum

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k]
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum
}

console.log("ans=", maxSum([2, 1, 5, 1, 3, 2], 3))