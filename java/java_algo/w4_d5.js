class StackNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
  /**
   * The constructor is executed when instantiating a new Stack() to construct
   * a new instance.
   * @returns {Stack} This new Stack instance is returned without having to
   *    explicitly write 'return' (implicit return).
   */
  constructor() {
    this.head = null;
  }

  /**
   * Adds a new given item to the top of this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @param {any} item The new item to be added to the top / back.
   * @returns {Stack} this
   */
  push(item) {
    let newNode = new StackNode(item);
    if (!this.head) {
      this.head = newNode;
      return 1;
    }
    let temp = this.head;
    this.head = newNode;
    newNode.next = temp;
    return this.size();
  }

  /**
   * Removes the top item from this stack.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The removed item or undefined if this stack was empty.
   */
  pop() {
    if (this.head == null) {
      return null;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return temp.data;
  }

  /**
   * Retrieves the top item from this stack without removing it.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {any} The top item of this stack.
   */
  peek() {
    if (this.head == null) {
      return null;
    }
    return this.head.data;
  }
  /**
   * Returns whether or not this stack is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    if (this.head) {
      return true;
    }
    return false;
  }
  /**
   * Returns the size of this stack.
   * @returns {number} The length.
   */
  size() {
    let len = 0;
    let runner = this.head;
    while (runner) {
      len++;
      runner = this.next;
    }
    return len;
  }

  toArr() {
    const arr = [];
    let runner = this.head;

    while (runner) {
      arr.push(runner.data);
      runner = runner.next;
    }
    return arr;
  }
}

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  /**
   * Adds a new item to the back of the queue.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} item To be added.
   * @returns {number} The new number of items in the queue.
   */
  enqueue(item) {}

  /**
   * Removes the next item in the line / queue.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The removed item.
   */
  dequeue() {}
}
