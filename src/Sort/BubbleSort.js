/**
 * 
 https://www.geeksforgeeks.org/bubble-sort/
 image for reference.li

 Time complexity - O(n^2)
 space complexity - O(1)
 */

function bubbleSort(arr) {
    let temp;
    let swapped;

    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true
            }
        }

        if (swapped == false)
            break;
    }
}

