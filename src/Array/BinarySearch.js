//Binary search in array

let arr = [4, 2, 1, 6, 7, 5];
arr = arr.sort((a, b) => a - b);

function binarySearch(target, start, end) {
    if (start > end) {
        return 'not found';
    }
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        console.log("found=", arr[mid])
        return arr[mid]
    }

    if (arr[mid] > target) {
        return binarySearch(target, start, mid - 1);
    }

    if (arr[mid] < target) {
        return binarySearch(target, mid + 1, end)
    }
}
binarySearch(5, 0, arr.length - 1);
