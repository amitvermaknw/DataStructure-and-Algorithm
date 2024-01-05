//Bubble sort
//Take first 2 numebr and replace if they are small and continue same.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

console.log("BubbleSort!=", bubbleSort([12, 4, 6, 3, 1323, 54, 98, 34, 78, 123, 1]));


//Selection sort
//Find the smallest number and place at first place.
function selectionSort(array) {
    let arr = array.slice();
    let min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr;
}
console.log("selectionSort!=", selectionSort([12, 4, 6, 3, 1323, 54, 98, 34, 78, 123, 1]));

//Insertion sort
// pure function: Dont mutate the arr
//Go through the array from one and see if that is smaller then left number if yes then replace.
function insertionSort(array) {
    const arr = array.slice();
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            } else {
                break;
            }
        }
    }
    return arr;
};
console.log("insertionSort!=", insertionSort([12, 4, 6, 3, 1323, 54, 98, 34, 78, 123, 1]));


//Merge sort

const mergeArr = (leftArray, rightArray) => {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]);
            leftIndex++;
        } else {
            result.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    return [...result, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
}

const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const midIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, midIndex);
    const rightArray = array.slice(midIndex);
    return (mergeArr(mergeSort(leftArray), mergeSort(rightArray)));
};

console.log(mergeSort([1, 4, 2, 8, 345, 23, 43, 32, 63, 1, 92]));
