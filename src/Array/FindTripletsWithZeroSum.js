/**
 * Find triplets with zero sum
 * Given an array arr[] of n integers. Check whether it contains a triplet that sums up to zero. 

Note: Return 1, if there is at least one triplet following the condition else return 0.

Example 1:

Input: n = 5, arr[] = {0, -1, 2, -3, 1}
Output: 1
Explanation: 0, -1 and 1 forms a triplet
with sum equal to 0.
Example 2:

Input: n = 3, arr[] = {1, 2, 3}
Output: 0
Explanation: No triplet with zero sum exists. 

 */

function findTriplets(arr, n) {
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        let left = i + 1, right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right]
            if (sum === 0) {
                return 1
            } else if (sum < 0) {
                left++
            } else {
                right--
            }

        }
    }
    return 0;
}