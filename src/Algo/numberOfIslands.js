/**
 * 200. Number of Islands
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.


Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 */


var numIslands = function (grid) {
    let row = grid.length, col = grid[0].length
    let count = 0;

    function bfs(i, j) {
        let queue = [[i, j]]
        grid[i][j] = "0"

        while (queue.length > 0) {
            let direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
            const [x, y] = queue.shift()
            for (let [dx, dy] of direction) {
                let ndx = x + dx, ndy = y + dy;

                if (ndx >= 0 && ndy >= 0 && ndx < row && ndy < col && grid[ndx][ndy] == "1") {
                    queue.push([ndx, ndy])
                    grid[ndx][ndy] = "0"  //I have already visited this land
                }
            }
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === "1") {
                count++;
                bfs(i, j)
            }
        }
    }

    return count
};