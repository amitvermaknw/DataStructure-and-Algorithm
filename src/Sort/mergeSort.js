/**
 Example:
Array: [38, 27, 43, 3, 9, 82, 10]

Split into:
[38, 27, 43, 3]    [9, 82, 10]

Split further:
[38, 27]  [43, 3]    [9, 82]  [10]

Split again:
[38] [27]   [43] [3]   [9] [82]   [10]

Merge step:
[27, 38]   [3, 43]   [9, 82]   [10]

Merge again:
[3, 27, 38, 43]   [9, 10, 82]

Final merge:
[3, 9, 10, 27, 38, 43, 82]
 */

function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}


function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)];
}