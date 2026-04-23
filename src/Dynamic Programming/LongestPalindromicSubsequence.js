/**
 * 516. Longest Palindromic Subsequence

Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

 Example 1:

Input: s = "bbbab"
Output: 4
Explanation: One possible longest palindromic subsequence is "bbbb".
Example 2:

Input: s = "cbbd"
Output: 2
Explanation: One possible longest palindromic subsequence is "bb".
 */

var longestPalindromeSubseq = function (s) {
    let dp = []

    for (let i = 0; i < s.length + 1; i++) {
        dp[i] = []
        for (let j = 0; j < s.length + 1; j++) {
            dp[i][j] = 0
        }
    }

    for (let i = s.length - 1; i >= 0; i--) {
        dp[i][i] = 1
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = 2 + dp[i + 1][j - 1]
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[0][s.length - 1]

};