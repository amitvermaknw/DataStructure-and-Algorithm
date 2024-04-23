/**
 * Third largest element
 * Given an array of distinct elements. Find the third largest element in it.

Suppose you have A[] = {1, 2, 3, 4, 5, 6, 7}, its output will be 5 because it is the 3 largest element in the array A.

Example 1:

Input:
N = 5
A[] = {2,4,1,3,5}
Output: 3
Example 2:

Input:
N = 2
A[] = {10,2}
Output: -1
 */

function thirdLargest(a, n) {
    let firstMaxNum = 0
    let secondMaxNum = 0
    let thirdMaxNum = 0
    for (let i = 0; i < n; i++) {
        if (a[i] > firstMaxNum) {
            firstMaxNum = a[i]
        }
    }

    for (let i = 0; i < n; i++) {
        if (a[i] > secondMaxNum && a[i] !== firstMaxNum) {
            secondMaxNum = a[i]
        }
    }

    for (let i = 0; i < n; i++) {
        if (a[i] > thirdMaxNum && a[i] !== firstMaxNum && a[i] !== secondMaxNum) {
            thirdMaxNum = a[i]
        }
    }


    console.log(thirdMaxNum)
    return thirdMaxNum;
}
console.log(thirdLargest([2, 4, 1, 3, 5], 5));