/**
 * Maximum Depth of Binary Tree
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2

 */

var maxDepth = function (root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};