/**
 * 124. Binary Tree Maximum Path Sum
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. 
 * A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

Example 1:

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
Example 2:

Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

Problem url - https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 */

var maxPathSum = function (root) {
    let maxSum = -Infinity;   // global maximum

    function dfs(node) {
        if (!node) return 0;

        // only take positive contributions (ignore negative subtrees)
        let leftGain = Math.max(dfs(node.left), 0);
        let rightGain = Math.max(dfs(node.right), 0);

        // path through current node
        let currentPath = node.val + leftGain + rightGain;

        // update global max if needed
        maxSum = Math.max(maxSum, currentPath);

        // return max gain to parent (choose one side)
        return node.val + Math.max(leftGain, rightGain);
    }

    dfs(root);
    return maxSum;
};