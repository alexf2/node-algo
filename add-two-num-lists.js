/*
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const addTwoNumbers = function(l1, l2) {
    let n1 = l1, n2 = l2
    let resultRoot
    let current = resultRoot, remainder = 0

    while (n1 || n2) {
        const summ = (n1?.val || 0) + (n2?.val || 0) + remainder
        let value
        if (summ > 9)
            value = summ % 10, remainder = summ /10 >>> 0
        else
            value = summ, remainder = 0
        
        if (!resultRoot) {
            resultRoot = current = new ListNode(value)
        } else {
            current.next = new ListNode(value)
            current = current.next
        }

        n1 && (n1 = n1.next)
        n2 && (n2 = n2.next)
    }

    if (remainder) {
        current.next = new ListNode(remainder)
        current = current.next
    }

    return resultRoot || new ListNode(0)
};

