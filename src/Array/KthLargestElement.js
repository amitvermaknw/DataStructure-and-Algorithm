/**
 * 215. Kth Largest Element in an Array
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?
Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
 */

//Quick sort - https://www.youtube.com/watch?v=XEmy13g1Qxc&ab_channel=NeetCode

var findKthLargest = function (nums, k) {
    k = nums.length - k;

    const quickSelect = (l, r) => {
        let pivot = nums[r], p = l;

        for (let i = l; i < r; i++) {
            if (nums[i] <= pivot) {
                [nums[i], nums[p]] = [nums[p], nums[i]]
                p += 1;
            }
        }
        [nums[p], nums[r]] = [nums[r], nums[p]]

        if (p > k) return quickSelect(l, p - 1);
        else if (p < k) return quickSelect(p + 1, r);
        else return nums[p];
    }

    return quickSelect(0, nums.length - 1)
};