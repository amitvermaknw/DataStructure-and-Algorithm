/**
 * Count the subarrays having product less than k
Given an array of positive numbers, the task is to find the number of possible contiguous subarrays having product less than a given number k.

Example 1:

Input : 
n = 4, k = 10
a[] = {1, 2, 3, 4}
Output : 
7
Explanation:
The contiguous subarrays are {1}, {2}, {3}, {4} 
{1, 2}, {1, 2, 3} and {2, 3}, in all these subarrays
product of elements is less than 10, count of
such subarray is 7.
{2,3,4} will not be a valid subarray, because 
2*3*4=24 which is greater than 10.
Example 2:

Input:
n = 7 , k = 100
a[] = {1, 9, 2, 8, 6, 4, 3}
Output:
16
 */

function countSubArrayProductLessThanK(a, n, k) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (a[i] < k)
            count++
    }

    let result = []

    for (let i = 0; i < n; i++) {
        let product = 1;
        let newArr = [];

        for (let j = i; j < n; j++) {
            product = product * a[j];
            if (product < k) {
                newArr.push(a[j])
            }
        }

        result.push(newArr)
    }

    //console.log(result)
    return result.length + count
}