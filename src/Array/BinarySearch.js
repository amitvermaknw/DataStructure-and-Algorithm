//Binary search in array

let arr = [4, 2, 1, 6, 7, 5];
arr.sort((a, b) => a - b); // [1, 2, 4, 5, 6, 7]

function binarySearch(target, arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Optimization: Bitwise or Math.floor to find mid
        let mid = (left + right) >> 1;

        if (arr[mid] === target) {
            return arr[mid];
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return 'not found';
}

console.log("found =", binarySearch(5, arr));

/**
 * Python
 * def binary_search(arr, target):
    left = 0
    right = len(arr) -1
    
    while left <=right:
        mid = (left+right) //2
        
        if arr[mid] == target:
            return mid
            
        else if arr[mid] < target:
            left = mid + 1
            
        else: 
            right = mid -1 
            
    return -1 
 */