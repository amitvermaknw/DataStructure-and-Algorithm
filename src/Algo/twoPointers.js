/**
 * 15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
 */

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left++], nums[right--]]);
                while (nums[left] === nums[left - 1]) left++;
            } else if (sum < 0) left++;
            else right--;
        }
    }

    return res;
}