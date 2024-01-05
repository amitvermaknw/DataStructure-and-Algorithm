/**
 * Given a string s, return the longest palindromic substring in s.
 * Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 * */

var longestPalindrome = function (s) {
    let longest = '';

    function isPal(s, left, right) {
        while (left > 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let oddPal = isPal(s, i, i);
        let evenPal = isPal(s, i, i + 1);
        let longestPal = oddPal > evenPal ? oddPal : evenPal;

        if (longestPal.length > longest.length) {
            longest = longestPal;
        }
    }

    return longest;

};