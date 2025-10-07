/**
 * Tree Diameter
 * Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. 
 * The diameter of a tree may or may not pass through the root.

 */

function diameter(node) {
    let max = 0

    function cal(current) {
        if (current == null) return 0

        let left = cal(node.left);
        let right = cal(node.right);

        max = Math.max(max, 1 + left + right)

        return 1 + Math.max(left, right)
    }

    cal(node)
    return max
}