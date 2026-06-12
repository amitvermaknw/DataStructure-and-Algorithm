class Node {
    constructor (d) {
        this.data = d;
        this.next = null;
    }
}

function printrandom(node) {
    if (node == null) {
        return;
    }
    let result = node.data;
    let current = node;
    let n;
    for (n = 2; current != null; n++) {
        if (Math.floor(Math.random() * n) == 0) {
            result = current.data;
        }
        current = current.next;
    }

    console.log(result)
}

// Driver program to test above functions
head = new Node(5);
head.next = new Node(20);
head.next.next = new Node(4);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(30);

printrandom(head);