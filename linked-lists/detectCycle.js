const LinkedList = require("./linkedList");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head == null || head.next == null) {
    return false;
  }

  let pos = 0;
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    console.log(pos);
    pos++;

    if (fast == slow) {
      return pos;
    }
  }

  return false;
};

ll = new LinkedList(1);
ll.addAtHead(3);
ll.addAtHead(5);
ll.addAtHead(7);
ll.addAtHead(8);
ll.addAtHead(2);
ll.addCycleNode();

console.log(ll);
console.log(detectCycle(ll.head));
