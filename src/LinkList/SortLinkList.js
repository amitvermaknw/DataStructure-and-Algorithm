class Node {
    constructor (val, next = null) {
        this.val = val;
        this.next = next;
    }
}

var sortNodes = function (node) {
    let result = [];
    while (node) {
        result.push(node.val);
        node = node.next;
    }

    return result.sort((a, b) => b - a);
}

var sortList = function (head) {
    if (head == null) return
    let result = sortNodes(head);
    let sortedList;
    for (let i = 0; i < result.length; i++) {
        sortedList = new Node(result[i], sortedList);
    }
    return sortedList;

};