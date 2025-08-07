/**
 * 373. Find K Pairs with Smallest Sums
 *  You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

Define a pair (u, v) which consists of one element from the first array and one element from the second array.

Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

 */

var kSmallestPairs = function (nums1, nums2, k) {
    let minHeap = [];
    let result = [];

    for (let i = 0; i < Math.min(nums1.length, k); i++) {
        minHeap.push(nums1[i] + nums2[0], i, 0)
    }

    minHeap.sort((a, b) => a[0] - b[0]);

    while (result.length < k && minHeap.length > 0) {
        const [sum, i, j] = minHeap.shift();
        result.push(nums1[i], nums2[j]);

        if (j + 1 < nums2.length) {
            minHeap.push(nums1[i] + nums2[j + 1], i, j + 1)
            minHeap.sort((a, b) => a[0] - b[0])
        }
    }

    return result
}

/**
 * Execution of Second example for understanding
 * 
 * minHeap= [ [ 2, 0, 0 ], [ 2, 1, 0 ] ]
Sort minHeap= [ [ 2, 0, 0 ], [ 2, 1, 0 ] ]
minHeap= [ [ 2, 1, 0 ] ]
result= [ [ 1, 1 ] ]
minHeap next pair= [ [ 2, 1, 0 ], [ 3, 0, 1 ] ]
minHeap next pair sort= [ [ 2, 1, 0 ], [ 3, 0, 1 ] ]
minHeap= [ [ 3, 0, 1 ] ]
result= [ [ 1, 1 ], [ 1, 1 ] ]
minHeap next pair= [ [ 3, 0, 1 ], [ 3, 1, 1 ] ]
minHeap next pair sort= [ [ 3, 0, 1 ], [ 3, 1, 1 ] ]
Subset of array= [ [ 1, 1 ], [ 1, 1 ] ]
 */