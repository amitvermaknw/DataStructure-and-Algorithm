
let data = [
    [1, 4],
    [2, 5],
    [3, 6]
]

//output [1, 6]

function overlapping(numArr) {

    numArr.sort((a, b) => a[0] - b[0])

    let res = [numArr[0]]
    for (let i = 1; i < numArr.length; i++) {
        let current = numArr[i]
        let previous = res[res.length - 1]

        if (current[0] <= previous[1]) {
            res[res.length - 1] = [previous[0], Math.max(current[1], previous[1])]
        } else {
            res.push(current)
        }
    }
    return res
}

console.log(overlapping(data))
