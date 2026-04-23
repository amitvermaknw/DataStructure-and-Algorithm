/**
 * 19. Remove Nth Node From End of List
Solved
Medium
Topics
premium lock icon
Companies
Hint
Given the head of a linked list, remove the nth node from the end of the list and return its head.

 Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let currentHead = head;
    let previousHead = null
    let current = head
    let count = 0

    while (current !== null) {
        count++
        current = current.next
    }

    if (count === n) {
        return head.next
    }

    for (let i = 0; i < count - n; i++) {
        previousHead = currentHead
        currentHead = currentHead.next
    }

    previousHead.next = currentHead.next
    return head
};