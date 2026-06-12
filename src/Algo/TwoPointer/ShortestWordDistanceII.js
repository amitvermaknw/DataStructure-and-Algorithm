/**
 * 244. Shortest Word Distance II
Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters. 

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1

 */

class ShortestWord {
    constructor () {
        this.words = ["practice", "makes", "perfect", "coding", "makes"]
        this.wordsMap = new Map()
        this.makeMap()
    }

    makeMap() {
        for (let i = 0; i < this.words.length; i++) {
            if (!this.wordsMap.has(this.words[i])) {
                this.wordsMap.set(this.words[i], [])
            }
            this.wordsMap.get(this.words[i]).push(i)
        }
    }

    shortestDistance(word1, word2) {
        let word1Index = this.wordsMap.get(word1)
        let word2Index = this.wordsMap.get(word2)

        let left = 0
        let right = 0
        let minDistance = Infinity

        while (left < word1Index.length && right < word2Index.length) {
            let index1 = word1Index[left]
            let index2 = word2Index[right]

            minDistance = Math.min(minDistance, Math.abs(index2 - index1))

            if (index1 < index2) {
                left++
            } else {
                right++
            }
        }
        return minDistance
    }
}

const sortWord = new ShortestWord()
console.log(sortWord.shortestDistance("makes", "coding"))