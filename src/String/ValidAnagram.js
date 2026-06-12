/**
 * 242. Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

var isAnagram = function (s, t) {

    if (s.length !== t.length) return false

    let freq = new Map()
    let freq2 = new Map()

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1)
    }

    for (let ch of t) {
        freq2.set(ch, (freq2.get(ch) || 0) + 1)
    }

    for (const [key, value] of freq) {
        if (freq2.get(key) !== value) {
            return false
        }
    }
    return true
};
