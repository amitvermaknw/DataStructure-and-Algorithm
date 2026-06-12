/**
 * 345. Reverse Vowels of a String
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "IceCreAm"
Output: "AceCreIm"

Explanation:
The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/

var reverseVowels = function (s) {
    let left = 0
    let right = s.length - 1
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let arr = s.split('')

    while (left < right) {
        if (!vowels.includes(s[left].toLowerCase())) {
            console.log("left")
            left++
        }

        if (!vowels.includes(s[right].toLowerCase())) {
            console.log("right")
            right--
        }

        if (vowels.includes(s[left].toLowerCase()) && vowels.includes(s[right].toLowerCase())) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }

    return arr.join('')
};