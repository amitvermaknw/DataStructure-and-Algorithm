/**
 * 64. Minimum Path Sum
Medium
11.6K
150
Companies
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example 1:

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
Example 2:

Input: grid = [[1,2,3],[4,5,6]]
Output: 12
 
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let row = grid.length;
    let col = grid[0].length;

    // Calculate the distance travelled within the first column
    // This is because each square depends on the one above
    // And the one to the left. However there is nothing left
    // of the first column so we can calculate it by adding
    // the current square to the square above it
    for (let i = 1; i < row; i++) {
        grid[i][0] += grid[i - 1][0]
    }

    // The same goes for the first row. There is nothing above the 
    // first row. So we just calculate the distance by what is to the left
    // of it
    for (let j = 1; j < col; j++) {
        grid[0][j] += grid[0][j - 1]
    }

    // Start one row and one column in because we've precomputed
    // those above

    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
        }
    }

    return grid[row - 1][col - 1]
};