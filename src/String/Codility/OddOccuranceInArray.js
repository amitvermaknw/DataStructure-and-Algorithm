/**
 * A non-empty array A consisting of N integers is given. The array contains an odd number of elements, 
 * and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

For example, in array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the elements at indexes 0 and 2 have value 9,
the elements at indexes 1 and 3 have value 3,
the elements at indexes 4 and 6 have value 9,
the element at index 5 has value 7 and is unpaired.
Write a function:

function solution(A);

that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

For example, given array A such that:

  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.
 */

function solution(A) {
  const sortArr = A.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i = i + 2) {
    if (sortArr[i] !== sortArr[i + 1]) {
      return sortArr[i];
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));

//My solution 
function solution(a) {
  let map = new Map
  let count = 0

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      if (a[i] == a[j]) {
        count++
      }
    }
    map.set(a[i], count);
    count = 0
  }

  for (let [key, value] of map) {
    if (value % 2 !== 0) {
      return key
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]))

