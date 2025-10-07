/**
 * Max depth in binary tree
 */

function maxDepth(node) {
    if (node === null) return 0

    let left = maxDepth(node.left)
    let right = maxDepth(node.right)

    return 1 + Math.max(left, right)
}