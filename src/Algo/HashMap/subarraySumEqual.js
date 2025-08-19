/**
 * 560. Subarray Sum Equals K
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
 */

var subarraySum = function (nums, k) {
    let map = new Map()
    let preFix = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        preFix = preFix + nums[i]
        let diff = preFix - k

        if (map.has(diff)) {
            count = count + map.get(diff)
        }

        if (!map.has(preFix)) {
            map.set(preFix, 1)
        } else {
            map.set(preFix, map.get(preFix) + 1)
        }
    }

    console.log(map)
    return count
};
console.log("ans=", subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7))
