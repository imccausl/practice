// for inspecting the list with console.log
const { inspect } = require("util");

// doing it the old school prototypical inheritance way for funzies.
const Node = function(val = null, next = null) {
  this.val = val;
  this.next = next;
};

const MyLinkedList = function(val = null) {
  this.head = null;
  this.length = 0;

  this.addAtHead(val);
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  let currNode = this.head;

  for (let i = 0; i < index; i++) {
    if (!currNode) {
      return -1;
    }

    currNode = currNode.next;
  }

  if (!currNode || !currNode.hasOwnProperty("val")) {
    return -1;
  }

  return currNode.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const newNode = new Node(val, this.head);

  if (val !== null) {
    this.head = newNode;
    this.length++;
  }
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
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
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.length) {
    return -1;
  }
  let currNode = this.head;
  let prevNode = null;

  for (let i = 0; i < index; i++) {
    prevNode = currNode;
    currNode = currNode.next;
  }

  const newNode = new Node(val, currNode);

  if (!prevNode) {
    if (!currNode) {
      this.head = newNode;
    } else {
      currNode.head = newNode;
    }
  } else {
    prevNode.next = newNode;
  }

  this.length++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index > this.length - 1) {
    return -1;
  }

  let currNode = this.head;
  let prevNode = null;

  if (index === 0) {
    this.head = currNode.next;
  } else {
    for (let i = 0; i < index; i++) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = currNode.next;
  }

  this.length--;
};

// Output for testing

// const calls = [
//   "addAtHead",
//   "get",
//   "addAtTail",
//   "addAtIndex",
//   "addAtHead",
//   "addAtIndex",
//   "addAtTail",
//   "addAtTail",
//   "addAtIndex",
//   "get",
//   "addAtTail"
// ];

// const argses = [[0], [1], [2], [1, 4], [4], [1, 4], [5], [2], [2, 0], [2], [1]];

// function test(methods, inputs) {
//   ll = new MyLinkedList();

//   methods.forEach((method, index) => {
//     console.log("method:", method);
//     console.log("args:", inputs[index]);

//     if (method === "get") {
//       console.log(ll.get.apply(ll, inputs[index]));
//     } else {
//       ll[method].apply(ll, inputs[index]);
//       console.log(inspect(ll, false, null, true));
//     }
//   });
// }

// test(calls, argses);

module.exports = MyLinkedList;
