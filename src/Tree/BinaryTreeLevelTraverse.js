/**
 * Binary Tree Level Order Traversal
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

var levelOrder = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {
        let level = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
};

function levelOrderSecond(root) {
    let result = []
    let queue = [root]

    while (queue.length) {
        result.push(queue.map(node => node.data))
        queue = queue.flatMap(node => [node.left, node.right].filter(Boolean))
    }

    return result
}