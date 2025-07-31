/**
 * 34. Find First and Last Position of Element in Sorted Array
Attempted
Medium
Topics
premium lock icon
Companies
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]


Comment - for this solution run binary search two time, 
1. at first go to left 
2. go to right with same implemenation only 
3. low and high value is changing.
 */

var searchRange = function (nums, target) {
    function findFirst(nums, target) {
        let low = 0, high = nums.length - 1, result = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                result = mid;
                high = mid - 1; // keep searching on left
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }

    function findLast(nums, target) {
        let low = 0, high = nums.length - 1, result = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (nums[mid] === target) {
                result = mid;
                low = mid + 1; // keep searching on right
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }

    return [findFirst(nums, target), findLast(nums, target)];
};
