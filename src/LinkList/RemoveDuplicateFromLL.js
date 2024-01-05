/**
 * Remove Duplicates from Sorted List
 * Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
 */

var deleteDuplicates = function (head) {
    if (!head) return head;
    let newSet = new Set();
    let node = head;

    while (node) {
        const { val, next } = node;
        newSet.add(val);       //Set will remove the duplicate values
        node = next;
    }

    const newArr = Array.from(newSet).reverse();
    let newLinkedList;
    for (let i = 0; i < newArr.length; i++) {
        newLinkedList = new ListNode(newArr[i], newLinkedList);
    }
    return newLinkedList;
};