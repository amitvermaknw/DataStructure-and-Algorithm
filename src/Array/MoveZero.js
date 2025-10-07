/**
 * 6. Move Zeroes
 * Given an array of integers nums, move all the 0s, which are present in the array to the end while maintaining the relative order of the non-zero elements.

Note: This rearrangement should be done in-place without using extra space for another array.

Example:

Input: [1, 0, 2, 0, 3, 0, 4]
Expected Output: [1, 2, 3, 4, 0, 0, 0]
Justification: Here, all non-zero elements (1, 2, 3, 4) retain their order, and all zeros are moved to the end of the array.

 */

function moveZero(arr) {
    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[left] = arr[i];
            left++;
        }
    }

    for (let i = left; i < arr.length; i++) {
        arr[i] = 0;
    }

    return arr;
}