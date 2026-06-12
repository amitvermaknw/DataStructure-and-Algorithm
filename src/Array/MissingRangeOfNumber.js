/**
 * You have an inclusive interval [lower, upper] and a sorted array of unique integers arr[], all of which lie within this interval. A number x is considered missing if x is in the range [lower, upper] but not present in arr[]. Your task is to return the smallest set of sorted ranges that includes all missing numbers, ensuring no element from arr is within any range, and every missing number is covered exactly once.

Examples:

Input: arr[] = [14, 15, 20, 30, 31, 45], lower = 10, upper = 50
Output: [[10, 13], [16, 19], [21, 29], [32, 44], [46, 50]]
Explanation: These ranges represent all missing numbers between 10 and 50 not present in the array.
Input: arr[] = [-48, -10, -6, -4, 0, 4, 17], lower = -54, upper = 17
Output: [[-54, -49], [-47, -11], [-9, -7], [-5, -5], [-3, -1], [1, 3], [5,16]]
Explanation: These ranges cover all missing numbers between -54 and 17 not included in the array.
Input: arr[] = [15, 16, 17, 18], lower = 15, upper = 18
Output: []
Explanation: Since all numbers from 15 to 18 are present in the array, there are no missing intervals.
 */

class Solution {
    missingRanges(arr, lower, upper) {
        let res = []

        //First element
        if (arr[0] > lower) {
            res.push([lower, arr[0] - 1])
        }

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] > 1) {
                res.push([arr[i - 1] + 1, arr[i] - 1])
            }
        }

        //Last element
        if (arr[arr.length - 1] < upper) {
            res.push([arr[arr.length - 1] + 1, upper])
        }

        return res

    }
}