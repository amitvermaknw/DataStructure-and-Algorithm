

#124. Binary Tree Maximum Path Sum
# A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. 
# A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
# The path sum of a path is the sum of the node's values in the path.
# Given the root of a binary tree, return the maximum path sum of any non-empty path.
# Input: root = [-10,9,20,null,null,15,7]
# Output: 42
# Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution(object):
    def maxPathSum(self, root):
        """
        :type root: Optional[TreeNode]
        :rtype: int
        """
        self.max_sum = 0

        def get_max_gain(node):

            if not node:
                return 0

            left_gain = max(get_max_gain(node.left), 0)
            right_gain = max(get_max_gain(node.right), 0)

            current_path_sum = node.val + left_gain + right_gain 

            self.max_sum =  max(self.max_sum, current_path_sum)

            return node.val + max(left_gain, right_gain)

        get_max_gain(root)

        return self.max_sum