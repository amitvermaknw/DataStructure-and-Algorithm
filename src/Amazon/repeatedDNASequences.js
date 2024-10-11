/**
 * 187. Repeated DNA Sequences
 * The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.s
Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]

 */

var findRepeatedDnaSequences = function (s) {
    let seen = new Set();
    let result = new Set();

    for (let left = 0; left < s.length; left++) {
        const subStr = s.substring(left, left + 10);

        if (!seen.has(subStr)) {
            seen.add(subStr);
        } else {
            result.add(subStr);
        }
    }

    return Array.from(result);

};

console.log("Result=", findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))