/**
 * Quick sort
 * Example:

Array: [38, 27, 43, 3, 9, 82, 10]
Pivot: 10
Left: [3, 9]
Pivot: [10]
Right: [38, 27, 43, 82]

Quick sort left → [3, 9]  
Quick sort right → pick pivot = 43:
Left: [38, 27] → sorted → [27, 38]  
Right: [82]

Combine:
[3, 9, 10, 27, 38, 43, 82]
 */

function QuickSort(arr) {
    if (arr.length <= 1) return arr

    let pivot = arr[arr.length - 1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [...QuickSort(left), pivot, ...QuickSort(right)]
}

console.log(QuickSort([5, 8, 2, 9, 23, 54]));