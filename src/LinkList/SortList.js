/**
 * 148. Sort List
 * 
 * Given the head of a linked list, return the list after sorting it in ascending order.

Example 1:

Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:

*/

function sortList(head) {
    if (!head || head.next) return head;

    let slow = head, fast = head, prev = null

    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }

    prev.next = null

    let left = sortList(head)
    let right = sortList(slow)

    return merge(left, right)
}

function merge(left, right) {
    let node = new Node(0)
    let tail = node;

    while (left && right) {
        if (left.data < right.data) {
            tail.next = left;
            left = left.next;
        } else {
            tail.next = right
            right = right.next
        }
    }

    tail.next = left || right;
    return node.next;
}
