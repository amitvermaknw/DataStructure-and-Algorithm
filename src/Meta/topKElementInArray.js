/**
 * 
 * Given a non-empty array nums[] of integers of length N, find the top k elements which have the highest frequency in the array.
 *  If two numbers have same frequencies, then the larger number should be given more preference.
Example 1:

Input:
N = 6
nums = {1,1,1,2,2,3}
k = 2
Output: {1, 2}
Example 2:

Input:
N = 8
nums = {1,1,2,2,3,3,3,4}
k = 2
Output: {3, 2}
Explanation: Elements 1 and 2 have the
same frequency ie. 2. Therefore, in this
case, the answer includes the element 2
as 2 > 1.
 */

function topK(nums, k) {
    // code here

    let map = new Map();
    let count = 0;
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let current = map.get(nums[i])
            count = current + 1
            map.set(nums[i], count);
        } else {
            map.set(nums[i], 1);
            count = 0;
        }
    }

    let data = Array.from(map).sort((a, b) => {
        if (b[1] == a[1]) {
            return b[0] - a[0]
        } else {
            return b[1] - a[1]
        }
    })

    for (let i = 0; i < k; i++) {
        result.push(data[i][0])
    }

    return result
}