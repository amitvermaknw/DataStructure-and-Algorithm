class Node {
    constructor (data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor () {
        this.root = null;
    }
    insert(data) {
        if (!this.root) {
            this.root = new Node(data);
            return
        } else {
            function insertNode(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                    } else {
                        return insertNode(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else {
                        return insertNode(node.right);
                    }
                }
            }
            insertNode(this.root);
        }
    }
}

