//Word autocomplete

class TrieNode {
    constructor () {
        this.children = {}
        this.isEnd = false
    }
}

class Trie {
    constructor () {
        this.root = new TrieNode()
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }

        node.isEnd = true;
    }

    autocomplete(prefix) {
        let node = this.root
        for (let char of prefix) {
            if (!node.children[char]) {
                return []
            }
            node = node.children[char]
        }

        let result = []
        this.dfs(node, prefix, result)
        return result
    }

    dfs(node, prefix, result) {
        if (node.isEnd) result.push(current)

        for (let char of node.children) {
            this.dfs(node.children[char], prefix + char, result)
        }
    }
}