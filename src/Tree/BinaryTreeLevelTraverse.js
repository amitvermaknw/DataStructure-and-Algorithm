/**
 * Binary Tree Level Order Traversal
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

var levelOrder = function (root) {
    if (!root) return [];
    let currentRoot = root;
    let result = [];
    let queue = [];
    queue.push(currentRoot);

    while (queue.length) {
        let subArr = [];
        let size = queue.length;
        while (size > 0) {
            currentRoot = queue.shift();
            if (currentRoot) {
                subArr.push(currentRoot.val);
            }
            if (currentRoot.left) queue.push(currentRoot.left);
            if (currentRoot.right) queue.push(currentRoot.right);
            size--;
        }

        result.push(subArr);
    }

    return result;
};