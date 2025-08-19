/**
 * 56. Merge Intervals
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
 * and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 */

var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    let ans = []
    let left = 0
    let right = 1
    while (right < intervals.length) {
        let firstEle = intervals[left]
        let secondEle = intervals[right]
        if (firstEle[1] >= secondEle[0]) {
            intervals[right] = [
                Math.min(firstEle[0], secondEle[0]),
                Math.max(firstEle[1], secondEle[1])
            ]
        } else {
            ans.push(firstEle)
        }
        left++
        right++
    }
    ans.push(intervals[intervals.length - 1])
    return ans
};