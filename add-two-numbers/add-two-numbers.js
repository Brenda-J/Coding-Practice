/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
    let result = new ListNode();
    let head = result;
    let carry = 0;
    
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = parseInt(sum / 10);
        head.val = sum % 10;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        if (l1 || l2) {
            head.next = new ListNode();
            head = head.next;
        }
    }
    
    if (carry > 0) {
        head.next = new ListNode(carry);
    }
    
    return result;
};