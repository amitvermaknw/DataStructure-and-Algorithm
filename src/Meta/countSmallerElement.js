/**
 * Count Smaller elements
Given an array Arr of size N containing positive integers. Count number of smaller elements on right side of each array element.

Example 1:

Input:
N = 7
Arr[] = {12, 1, 2, 3, 0, 11, 4}
Output: 6 1 1 1 0 1 0
Explanation: There are 6 elements right
after 12. There are 1 element right after
1. And so on.
Example 2:

Input:
N = 5
Arr[] = {1, 2, 3, 4, 5}
Output: 0 0 0 0 0
Explanation: There are 0 elements right
after 1. There are 0 elements right after
2. And so on.
 */

function constructLowerArray(arr, n) {
    let num = 0;
    let result = [];
    let count = 0
    while (num < n) {
        for (let i = num + 1; i < n; i++) {
            if (arr[i] < arr[num]) {
                count = count + 1;
            }
        }

        result.push(count)
        count = 0;
        num++
    }

    console.log(result)
    return result;
}
console.log(constructLowerArray([12, 1, 2, 3, 0, 11, 4], 7));