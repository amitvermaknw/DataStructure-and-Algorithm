/**
 * 94. Binary Tree Inorder Traversal
Easy
Topics
premium lock icon
Companies
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
Explanation:
Example 2:
Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
Output: [4,2,6,5,7,1,3,9,8]
Explanation:

Example 3:
Input: root = []
Output: []
Example 4:
Input: root = [1]
Output: [1]

URL - https://leetcode.com/problems/binary-tree-inorder-traversal/description/
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) return []

    let res = []
    function traversal(head) {

        if (head.left) {
            traversal(head.left)
        }

        res.push(head.val)

        if (head.right) {
            traversal(head.right)
        }
    }
    traversal(root)
    return res
};