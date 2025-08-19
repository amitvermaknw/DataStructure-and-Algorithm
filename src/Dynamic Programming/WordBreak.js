/**
 * Word Break
Given a string s and a dictionary of strings wordDict, return true if s can be segmented 
into a space-separated sequence of one or more dictionary words.
Note that the same word in the dictionary may be reused multiple times in the segmentation.
Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 */

function wordBreakRecursion(s, wordDict) {
    let wordSet = new Set(wordDict)

    function backtrack(start) {
        if (start === s.length) return true

        for (let end = start + 1; end <= s.length; end++) {
            let word = s.slice(start, end)

            if (wordSet.has(word) && backtrack(end)) {
                return true;
            }
        }
        return false;
    }
    backtrack(0)
}

var wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;
    for (let i = s.length - 1; i >= 0; i--) {
        for (let word of wordDict) {
            if (i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                dp[i] = dp[i + word.length];
            }
            if (dp[i])
                break;
        }
    }
    return dp[0];
};