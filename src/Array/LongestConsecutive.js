/*Longest consecutive Sequence
 * Given an unsorted array of integer, find the length of the longest consecutive elements sequence
Algorithm should run in O(n) complexity

Example
Input: [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elelment sequence is [1,2,3,4] therefor its length is 4
Video - https://www.youtube.com/watch?v=P6RZZMu_maU&ab_channel=NeetCode
 */

function longestConsecutive(arr) {
    const set = new Set(arr);
    let longest = 1;
    for (let item of arr) {
        if (set.has(item - 1)) {
            longest++
        }
    }
    return longest;
}
console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));


function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        // Only start counting if num is the start of a sequence
        if (!set.has(num - 1)) {
            let currentNum = num;
            let streak = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                streak++;
            }

            longest = Math.max(longest, streak);
        }
    }

    return longest;
}

/*Binary tree longest consecutive Sequence
 *     1
        3
    2       4
                5

Consecutive sequence - 3-4-5 (cannot go reverse)

Another
    2
        3
    2
1
Consecutive sequence - 2-3
 */

