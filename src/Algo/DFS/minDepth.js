/**
 * Minimum Depth of a Binary Tree
 *  Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.
 */

function minDepth(node) {
    if (node == null) return 0

    let left = minDepth(node.left)
    let right = minDepth(node.right)

    if (left === 0 || right === 0) {
        return 1 + Math.max(left, right)         //Max here because it possible left or right could be 0 and Math.min will always give 0
    }

    return 1 + Math.min(left, right)
}