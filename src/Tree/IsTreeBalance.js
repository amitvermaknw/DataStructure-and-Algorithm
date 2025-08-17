//Is tree balance 
//a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

var isBalanced = function (root) {
    let res = true;
    function traverse(currentRoot) {

        if (!currentRoot) return 0;

        let left = traverse(currentRoot.left);
        let right = traverse(currentRoot.right);

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            res = false;
        }
        return 1 + Math.max(left, right)
    }
    traverse(root);
    return res;
};