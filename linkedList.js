// for inspecting the list with console.log
const { inspect } = require("util");

// doing it the old school prototypical inheritance way for funzies.
const Node = function(val = null, next = null) {
  this.val = val;
  this.next = next;
};

const LinkedList = function(val) {
  this.head = null;
  this.length = 0;

  this.addAtHead(val);
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
LinkedList.prototype.get = function(index) {
  let currNode = this.head;

  for (let i = 0; i < index; i++) {
    currNode = currNode.next;

    if (!currNode) {
      return -1;
    }
  }

  return currNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
LinkedList.prototype.addAtHead = function(val) {
  const newNode = new Node(val, this.head);

  this.head = newNode;
  this.length++;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
LinkedList.prototype.addAtTail = function(val) {
  let currNode = this.head;

  // find the end of the list
  while (currNode.next) {
    currNode = currNode.next;
  }

  currNode.next = new Node(val);
  this.length++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
LinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length - 1) {
    throw new Error("Index not in range.");
  }
  let currNode = this.head;
  let prevNode = null;

  for (let i = 0; i < index; i++) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  const newNode = new Node(val, currNode);
  prevNode.next = newNode;
  this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
LinkedList.prototype.deleteAtIndex = function(index) {};

// Output for testing

const ll = new LinkedList(10);

console.log(inspect(ll, false, null, true));

ll.addAtHead(15);

console.log(inspect(ll, false, null, true));

ll.addAtHead(20);

console.log(inspect(ll, false, null, true));

ll.addAtHead(2303);

console.log(inspect(ll, false, null, true));

ll.addAtHead(244);

console.log(inspect(ll, false, null, true));

ll.addAtTail("Blerf");

console.log(inspect(ll, false, null, true));

console.log("Value at index 3:", ll.get(3));
console.log("Value at index 0:", ll.get(0));
console.log("Value at index 5:", ll.get(5));
console.log("Value at index 100:", ll.get(100));
console.log("Value at index 6:", ll.get(6));
console.log("Value at index 100000:", ll.get(100000));

ll.addAtIndex(3, 24);
console.log(inspect(ll, false, null, true));

ll.addAtIndex(6, 23948);
console.log(inspect(ll, false, null, true));

ll.addAtIndex(2, "Hmmmph");
console.log(inspect(ll, false, null, true));
