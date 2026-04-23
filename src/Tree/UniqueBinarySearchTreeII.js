/**
 * 95. Unique Binary Search Trees II
Medium
Topics
premium lock icon
Companies
Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
Example 1:

Input: n = 3
Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
Example 2:

Input: n = 1
Output: [[1]]

https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return []

    function build(start, end) {
        if (start > end) {
            return [null]
        }

        let result = []

        for (let i = start; i <= end; i++) {
            let leftTree = build(start, i - 1)
            let rightTree = build(i + 1, end)

            for (let left of leftTree) {
                for (let right of rightTree) {
                    let root = new TreeNode(i)

                    root.left = left
                    root.right = right

                    result.push(root)
                }
            }
        }
        return result
    }
    return build(1, n)
};