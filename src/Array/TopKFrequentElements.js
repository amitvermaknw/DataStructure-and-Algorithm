/**
 * 347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]

YouTube - https://www.youtube.com/watch?v=PB0PelkANu0&ab_channel=SantamariaCode
 */

var topKFrequent = function (nums, k) {
    let map = new Map;

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1)
        }
    }

    const sortMap1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]))

    let result = [];
    let count = 0;

    for (let [key, value] of sortMap1) {
        if (count < k) {
            result.push(key);
            count++;
        }
    }
    console.log(result)

    return result
};
