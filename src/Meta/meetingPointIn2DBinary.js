/**
 * Best meeting point in 2D binary array
You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in a group. And the group of two or more people wants to meet 
and minimize the total travel distance. They can meet anywhere means that there might be a home or not.

The distance is calculated using Manhattan Distance, where distance(p1, p2) = |p2.x – p1.x| + |p2.y – p1.y|.
Find the total distance that needs to be traveled to reach the best meeting point (Total distance traveled is minimum).
Examples: 

Input : grid[][] = {{1, 0, 0, 0, 1}, 
                   {0, 0, 0, 0, 0},
                   {0, 0, 1, 0, 0}};
Output : 6
Best meeting point is (0, 2).
Total distance traveled is 2 + 2 + 2 = 6

Input : grid[3][5] = {{1, 0, 1, 0, 1},
                     {0, 1, 0, 0, 0}, 
                     {0, 1, 1, 0, 0}};
Output : 11
 */

const ROW = 3;
const COL = 5;

function minTotalDistance(grid) {
    if (ROW === 0 || COL === 0) {
        return 0;
    }

    let vertical = [];
    let horizontal = [];

    // Find all members home's position
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] === 1) {
                vertical.push(i);
                horizontal.push(j);
            }
        }
    }

    // Sort positions so we can find most
    // beneficial point
    vertical.sort((a, b) => a - b);
    horizontal.sort((a, b) => a - b);

    // middle position will always beneficial
    // for all group members but it will be
    // sorted which we have already done
    const size = Math.floor(vertical.length / 2);
    const x = vertical[size];
    const y = horizontal[size];

    // Now find total distance from best meeting
    // point (x,y) using Manhattan Distance formula
    let distance = 0;
    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (grid[i][j] === 1) {
                distance += Math.abs(x - i) + Math.abs(y - j);
            }
        }
    }

    return distance;
}

// Driver Code
const grid = [
    [1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0]
];
console.log(minTotalDistance(grid));
