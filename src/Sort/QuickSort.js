/**
 * Quick sort
 */

function QuickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    };

    let pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }

    return QuickSort(left).concat(pivot, QuickSort(right));
}

console.log(QuickSort([5, 8, 2, 9, 23, 54]));