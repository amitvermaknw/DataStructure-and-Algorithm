/**
 * Find max positive and negative
 */


function findMax(n) {
    n.sort((a, b) => a - b);
    let maxNum = 0

    for (let i = 0; i < n.length; i++) {
        if (n.includes(n[i]) && n.includes(-n[i])) {
            maxNum = Math.max(maxNum, n[i]);
        }
    }

    return maxNum
}

console.log("output", findMax([3, 2, -2, 5, -3]))

