/**
 * 
 * Time complexity O(n^2)
 * space - O(1)
 */

function SelectionSort(arr) {
    let midIndex;
    for (let i = 0; i < arr.lenght - 1; i++) {
        midIndex = i;

        //Find the index of the minimum element in the remaining unsorted array
        for (let j = i + 1; j < arr.length; i++) {
            if (arr[midIndex] > arr[i]) {
                midIndex = j;
            }
        }

        //Swap the minimum element with the first unsorted element
        if (midIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[midIndex];
            arr[midIndex] = temp
        }

    }

    return arr;
}