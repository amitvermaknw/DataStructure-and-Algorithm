/**
 * 3. Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest substring without duplicate characters.
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

var lengthOfLongestSubstring = function (s) {
    if (s.length <= 0) return 0
    let set = new Set()
    let left = 0, ans = 0

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        ans = Math.max(ans, right - left + 1)
    }

    return ans
};