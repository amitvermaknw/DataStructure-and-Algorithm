//https://www.youtube.com/watch?v=HsGKI02yw6M&ab_channel=GregHogg
//https://algomap.io/

/**
 * 1004. Max Consecutive Ones III
 * Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 */
const longestOnes = function (nums, k) {
    let left = 0;
    let maxLen = 0;
    let numZero = 0;

    for (let right = 0; i < nums.length; right++) {

        if (nums[right] === 0) {
            numZero += 1;
        }

        while (numZero > k) {
            if (nums[left] === 0) {
                numZero -= 1;
            }
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))

//Time O(n)
//Space O(1)