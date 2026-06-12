/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

var isPalindrome = function (s) {

    let st = s.split(" ").join("")
    let left = 0;
    let right = st.length - 1

    function checkStr(str) {
        return /^[a-zA-Z0-9]+$/.test(str)
    }

    while (left < right) {
        if (!checkStr(st[left])) {
            left++
            continue
        }

        if (!checkStr(st[right])) {
            right--
            continue
        }

        if (st[left].toLowerCase() !== st[right].toLowerCase()) {
            return false
        } else {
            left++
            right--
        }
    }
    return true
};