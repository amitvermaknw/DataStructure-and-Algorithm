/**
 * Find the pivot where leftsum and right sum are equal 
 * [1,7,3,6,5,6]
 */

function pivotIndex(nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i]
    }

    let leftSum = 0

    for (let i = 0; i < nums.length; i++) {
        let rightSum = total - leftSum - nums[i]

        if (leftSum === rightSum) return i

        leftSum += nums[i]
    }

    return -1
}