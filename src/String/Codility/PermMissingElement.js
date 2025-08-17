/**
 * An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], 
 * which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:
 */

function solution(A) {
    if (!A) return 1;
    let sortedArr = A.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] !== i + 1) {
            return i + 1;
        } else {
            return sortedArr.length + 1;
        }
    }
}

//My solution
function solution(a) {
    let sort = a.sort((a, b) => a - b)

    for (let i = 0; i < sort.length; i++) {
        if (sort[i] !== i + 1) {
            return i + 1
        }
    }
}

console.log(solution([2, 3, 1, 5]))