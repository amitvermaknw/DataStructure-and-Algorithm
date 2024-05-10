/**
 * Maximum Integer Value
 * Given a string S of digits(0-9).Find the maximum value that can be obtained from the string by putting either '*' or '+' 
 * operators in between the digits while traversing from left to right of the string and picking up a single digit at a time.
 * Input: 
S="01230"
Output: 
9
Explanation: 
we have 01230.We traverse from 
left and pick zero.Now we encounter '1'. 
We see if 0*1 gives maximum or 0+1.Now we 
have ans=1.Now we traverse further.We 
encounter '2'.Now we see whether 1*2 gives 
max or 1+2.Now we have ans=3.Now we 
traverse further. We encounter'3'.
We see if 3*3 gives max or 3+3.
The ans is now 9.Now we traverse further. 
We encounter 0, we see if 9+0 gives max or 
9*0. The ans is now 9. We've traversed the
whole string so we stop.
 * 
 */

function MaximumIntegerValue(S) {
    let res = 0
    for (let i = 0; i < S.length; i++) {
        res = Math.max(res * Number(S[i]), res + Number(S[i]));

    }

    return res
}