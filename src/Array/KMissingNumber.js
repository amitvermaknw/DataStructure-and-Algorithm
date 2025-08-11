/**
 * 1539. Kth Missing Positive Number
 * Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

Example 1:

Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.
Example 2:

Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

 */

function findKthPositive(arr, k) {
    let newSet = new Set(arr);
    let count = 0;
    let num = 1;

    while (true) {
        if (!newSet.has(num)) {
            count++;
            if (count === k) return num; // Found k-th missing
        }
        num++;
    }
}

var findKthPositive = function (arr, k) {
    let missingNum = [];
    for (let i = 0; i < arr[arr.length - 1] + k; i++) {
        if (!arr.includes(i + 1)) {
            missingNum.push(i + 1)
        }
    }

    return missingNum[k - 1]
};