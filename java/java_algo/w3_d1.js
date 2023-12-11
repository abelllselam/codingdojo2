class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */

  isEmpty() {
    return this.head === null;
  }

  insertAtFront(data) {
    // create a new node
    const newNode = new Node(data);
    // if there is no head, set the head and tail to the new node
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if there is a head, set the head's previous to the new node
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    return this;
  }

  /**
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   
   */

  insertAtBack(data) {
    // create a new node
    const newNode = new Node(data);
    // if there is no tail, set the head and tail to the new node
    if (this.isEmpty()) {
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    return this;
  }

  // EXTRA
  /**
   * Removes the middle node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {
    // if there is no head, return null
    if (!this.head) {
      return null;
    }
    // if there is only one node, set the head and tail to null
    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    }
    // if there is more than one node, find the middle node
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    let middle = Math.floor(count / 2);
    current = this.head;
    let i = 0;
    while (i < middle - 1) {
      current = current.next;
      i++;
    }
    // set the previous node's next property to be the current node's next
    current.prev.next = current.next;
    // set the next node's previous property to be the current node's previous
    current.next.prev = current.prev;
    // return the data of the removed node
    return current.data;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);
const biNodeList = new DoublyLinkedList().insertAtFront(5);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList([4, 5, 6]).insertAtBackMany([
  4, 5, 6,
]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([
//   -5,
//   -10,
//   4,
//   -3,
//   6,
//   1,
//   -7,
//   -2,
// ]);
console.log(secondThreeList.insertAtFront(10).toArray());
console.log(secondThreeList.insertAtBack(3).toArray());
console.log(secondThreeList.insertAtFront(5).toArray());
console.log(secondThreeList.insertAtBack(2).toArray());
console.log(secondThreeList.insertAtFront(9).toArray());
console.log(secondThreeList.insertAtBack(1).toArray());
