/**
 * Given a matrix of N * M. Find the maximum path sum in matrix. The maximum path is sum of all elements from first row to 
 * last row where you are allowed to move only down or diagonally to left or right. You can start from any element in first row.

Examples: 

Input : mat[][] = 10 10  2  0 20  4
                   1  0  0 30  2  5
                   0 10  4  0  2  0
                   1  0  2 20  0  4
Output : 74
The maximum sum path is 20-30-4-20.

Input : mat[][] = 1 2 3
                  9 8 7
                  4 5 6
Output : 17
The maximum sum path is 3-8-6.
We are given a matrix of N * M. To find max path sum first we have to find max 
value in first row of matrix. Store this value in res. Now for every element in matrix update element 
with max value which can be included in max path. If the value is greater then res then update res. In last return res which consists of max path sum value.
 */

let row = 4, col = 6;

function findMaxPath(mat) {
    //Find max value in first row of matrix

    let res = -1;
    // for (let i = 0; i < col; i++) {     //col because loop has to run 6 times in first row
    //     res = Math.max(res, mat[0][i]);
    // }

    for (let i = 1; i < row; i++) {
        res = -1;
        for (let j = 0; j < col; j++) {
            //When all path is possible to travel
            if (j > 0 && j < col - 1) {
                mat[i][j] += Math.max(mat[i - 1][j], Math.max(mat[i - 1][j - 1], mat[i - 1][j + 1]));
            }
            else if (j > 0) { //When diagonal right is not possible
                mat[i][j] += Math.max(mat[i - 1][j], mat[i - 1][j - 1]);
            }
            else if (j < col - 1) { //When diagonal left is not possible
                mat[i][j] += Math.max(mat[i - 1][j], mat[i - 1][j + 1]);
            }
            res = Math.max(mat[i][j], res);
        }
    }

    return res;
}

let mat = [[10, 10, 2, 0, 20, 4],
[1, 0, 0, 30, 2, 5],
[0, 10, 4, 0, 2, 0],
[1, 0, 2, 20, 0, 4]];

console.log("Mat", findMaxPath(mat));