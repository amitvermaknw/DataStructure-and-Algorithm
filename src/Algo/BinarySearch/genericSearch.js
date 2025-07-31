/**
 * Generic binary search
 * 
 * https://github.com/BrandonBian/leetcode/blob/main/problems-and-solutions/LeetCode/binary-search.md?utm_source=chatgpt.com
 */

function genericBinary() {

    let low = minimum_possible;
    let high = maximum_possible;

    while (low < high) {
        let mid = Math.floor((low + high) / 2);

        if (isValid(mid)) {
            high = mid; // try smaller
        } else {
            low = mid + 1; // need larger
        }
    }

    return low;
}


/**
 * There Are Two Main Binary Search Templates
 * 
 * Template 1: low <= high
Used when you're searching for an exact value and want to return the index.

Template 2: low < high
Used when you're searching for minimum/maximum possible value in search space (not exact value), like in:

Minimum Capacity to Ship Packages

Koko Eating Bananas

Split Array Largest Sum
 */

var search = function (nums, target) {
    let low = 0, high = nums.length - 1

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (nums[mid] == target) return mid
        else if (nums[mid] < target) low = mid + 1
        else high = mid - 1
    }
    return -1
};