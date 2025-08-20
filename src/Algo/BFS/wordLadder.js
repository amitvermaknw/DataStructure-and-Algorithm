/**
 * 127. Word Ladder
 * A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 
 */

let ladderLength = function (beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]]; // [word, level]

    while (queue.length > 0) {
        let [word, level] = queue.shift();

        if (word === endWord) return level;

        for (let nextWord of wordSet) {
            if (isOneLetterDiff(word, nextWord)) {
                queue.push([nextWord, level + 1]);
                wordSet.delete(nextWord); // mark as visited
            }
        }
    }

    return 0;
};

// helper to check if two words differ by exactly one letter
function isOneLetterDiff(word1, word2) {
    let diff = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
}
