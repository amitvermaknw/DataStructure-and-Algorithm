/**
 * 
 * Given an array nums[] of size n, construct a Product Array P (of same size n) such that P[i] is equal to the product of all the elements of nums except nums[i].
Example 1:

Input:
n = 5
nums[] = {10, 3, 5, 6, 2}
Output:
180 600 360 300 900
Explanation: 
For i=0, P[i] = 3*5*6*2 = 180.
For i=1, P[i] = 10*5*6*2 = 600.
For i=2, P[i] = 10*3*6*2 = 360.
For i=3, P[i] = 10*3*5*2 = 300.
For i=4, P[i] = 10*3*5*6 = 900.
Example 2:

Input:
n = 2
nums[] = {12,0}
Output:
0 12

 */

function productExceptSelf(nums, n) {
    //code here
    let count = 0;
    let product = 1;
    let result = [];

    while (count < n) {
        for (let i = 0; i < n; i++) {
            if (count !== i) {
                product = product * nums[i]
            }
            console.log("product", product)
        }
        result.push(product);
        product = 1;
        count++
    }


    return result
}

console.log(productExceptSelf([10, 3, 5, 6, 2], 5));