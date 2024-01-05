
//Longest consecutive Sequence in Binary tree

class Node {
    constructor (item) {
        this.data = item;
        this.left = this.right = null;
    }
}

let maxLen = 0;

function searchLongestConsecutiveSquence(root, currentLen, expected) {
    if (root === null) {
        return
    }

    if (root.data == expected) {
        currentLen++;
    } else {
        currentLen = 1;
    }

    maxLen = Math.max(maxLen, currentLen)
    searchLongestConsecutiveSquence(root.left, currentLen, root.data + 1);
    searchLongestConsecutiveSquence(root.right, currentLen, root.data + 1);
};

// const rootNode = new Node(1);
// rootNode.left = new Node(2);
// rootNode.right = new Node(4);
// rootNode.left.left = new Node(3);
// rootNode.right.left = new Node(5);
// rootNode.right.right = new Node(6);
// rootNode.right.right.left = new Node(7);
const rootNode = new Node(6);
rootNode.right = new Node(9);
rootNode.right.left = new Node(7);
rootNode.right.right = new Node(10);
rootNode.right.right.right = new Node(11);

searchLongestConsecutiveSquence(rootNode, 0, 0);
console.log('max length=', maxLen);







