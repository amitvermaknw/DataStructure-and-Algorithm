/*235. Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree(BST), find the lowest common ancestor(LCA) node of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as 
the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

https://www.youtube.com/watch?v=gs2LMfuOR9k&ab_channel=NeetCode

Example 1:
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

*/
var lowestCommonAncestor = function (root, p, q) {
    let current = root;
    while (current) {
        if (p.val < current.val && q.val < current.val) {
            current = current.left;
        } else if (p.val > current.val && q.val > current.val) {
            current = current.right;
        } else {
            return current;
        }
    }
};