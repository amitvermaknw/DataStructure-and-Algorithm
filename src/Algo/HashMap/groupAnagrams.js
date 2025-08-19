/**
 * 49. Group Anagrams
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]
 */
/**
 * Solution : 
 * sort the characters
 * Use a hash map where the key = sorted string:
 */

var groupAnagrams = function (strs) {
    if (strs.length == 0 || strs.length == 1) return [strs]
    let ans = []
    let map = new Map()
    for (let word of strs) {
        let sorted = word.split("").sort().join("")

        if (map.has(sorted)) {
            let getWord = map.get(sorted)
            getWord.push(word)
            map.set(sorted, getWord)
        } else {
            map.set(sorted, [word])
        }
    }

    for (let [key, value] of map) {
        ans.push(value)
    }

    return ans
};