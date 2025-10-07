/**
 * 1. Toeplitz Matrix
Problem Statement: Given an m x n matrix, determine if a given matrix is a Toeplitz matrix.

A Toeplitz matrix is one in which every diagonal from top-left to bottom-right has the same elements.

In other words, the matrix should have the property that each element is equal to the element diagonally down to its right.

Example:

Input: [[1,2,3],[4,1,2],[5,4,1]]
Expected Output: true
Justification: All diagonals have the same elements. Diagonals of the above matrix are [5], [4, 4], [1, 1, 1], [2, 2], and [3].

A matrix M is Toeplitz if for all valid indices:
M[i][j]=M[i−1][j−1]
 */

function isToeplitze(matrix) {
    if (!matrix || matrix.length === 0) return true;
    let row = matrix.length, col = matrix[0].length;

    for (let r = 1; r < row; r++) {
        for (let c = 1; c < col; c++) {
            if (matrix[r][c] !== matrix[r - 1][c - 1]) return false
        }
    }

    return true;
}