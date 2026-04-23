/**
 * 73. Set Matrix Zeroes
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.


Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 */

var setZeroes = function (matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

    let foundRow = new Array(row).fill(0);
    let foundCol = new Array(col).fill(0);

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) {
                foundRow[i] = 1
                foundCol[j] = 1
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (foundRow[i] === 1 || foundCol[j] === 1) {
                matrix[i][j] = 0
            }
        }
    }
};