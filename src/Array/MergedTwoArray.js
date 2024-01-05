
function mergeArray(arr1, arr2) {
    let mergedArr = [];
    let i = 0, j = 0, arr1Len = arr1.length, arr2Len = arr2.length;

    while (i < arr1Len && j < arr2Len) {
        if (arr1[i] > arr2[j]) {
            mergedArr.push(arr2[j]);
            j++
        } else {
            mergedArr.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1Len) {
        mergedArr.push(arr1[i]);
        i++;
    }

    while (j < arr2Len) {
        mergedArr.push(arr2[j]);
        j++
    }
    return mergedArr;
}
console.log(mergeArray([2, 5, 7, 9], [1, 3, 6, 8, 10, 13, 15]));