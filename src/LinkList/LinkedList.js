//Merge to sorted list

/**
 * @param {Node} head1
 * @param {Node} head2
 * @returns {Node}
*/

class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class ListNode {
    constructor () {
        this.head = null;
        this.size = 0;
    }

    addNode(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = new Node(data);
            this.size++;
        }
    }

    insertAt(data, index) {
        let currentNode = this.head;
        let previousNode;

        if (index === 0) {
            let node = new Node(data);
            node.next = currentNode;
        }

        for (let i = 0; i <= index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        let newNode = new Node(data);
        newNode.next = currentNode;
        previousNode.next = newNode;

        this.size++;
    }

    removeAt(index) {
        if (index > this.size)
            return 'error'

        let currentNode = this.head;
        let previousNode;

        for (let i = 0; i < index; i++) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
        this.size--;
    }

    removeElement(data) {
        let currentNode = this.head;
        let previousNode;

        while (currentNode.next !== null) {

            if (currentNode.data === data) {
                break;
            }

            previousNode = currentNode;
            currentNode = currentNode.next
        }

        previousNode.next = currentNode.next;
        this.size--

    }

    print() {
        let currentNode = this.head;
        while (this.size >= 0) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
            this.size--;
        }
    }

    //Merge sorted link list
    sortedMerge(head1, head2) {
        let node = new Node(0);
        let blankNode = node;

        while (true) {
            if (head1 == null) {
                blankNode.next = head2;
                break;
            }
            if (head2 == null) {
                blankNode.next = head1;
                break;
            }
            if (head1.data <= head2.data) {
                blankNode.next = head1;
                head1 = head1.next;
            } else {
                blankNode.next = head2;
                head2 = head2.next;
            }
            blankNode = blankNode.next;
        }
        return node.next;
    }
}

let ll = new ListNode();
ll.addNode(20);
ll.addNode(30);
ll.addNode(40);
ll.addNode(50);

ll.insertAt(50, 3);
ll.removeAt(3);
ll.removeElement(30);
console.log(ll.print())

