/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */

class ListNode {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @returns {ListNode} A new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data;
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     *
     * @type {ListNode|null}
     */
    this.next = null;
  }
}

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    /** @type {ListNode|null} */
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    if (this.head === null) {
      this.head = new ListNode(data);
      return;
    }
    var runner = this.head;
    while (runner.next !== null) {
      runner = runner.next;
    }
    runner.next = new ListNode(data);
    return this;
  }

  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    let runner = this.head;
    while (runner.next.next !== null) {
      runner = runner.next;
    }
    return runner.data;
  }

  /**
   * Removes the node that has the matching given val as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */

  removeVal(val) {
    let runner = this.head;
    let previous = null;
    // if first node to be removed
    if (runner.data === val) {
      this.head = runner.next;
      return true;
    }
    // if node to be removed is in the middle
    while (runner.next !== null) {
      if (runner.data === val) {
        previous.next = runner.next;
        return true;
      }
      previous = runner;
      runner = runner.next;
    }
    // if node to be removed is the last node
    if (runner.next === null && runner.data === val) {
      previous.next = null;
      return true;
    }
    return false;
  }

  // EXTRA
  /**
   * Inserts a new node before a node that has the given value as its data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   * @returns {boolean} To indicate whether the node was pre-pended or not.
   */

  // 1 -> 2 -> 3 -> 4
  // ^
  // 5 <- new head
  prepend(newVal, targetVal) {
    let runner = this.head;
    let previous = null;
    let tempNode = new ListNode(newVal);
    if (runner.data == targetVal) {
      this.head = tempNode;
      tempNode.next = runner;
      return true;
    }
    while (runner) {
      if (runner.data == targetVal) {
        previous.next = tempNode;
        tempNode.next = runner;
        return true;
      }
      previous = runner;
      runner = runner.next;
    }
    return false;
  }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
    for (const item of vals) {
      this.insertAtBack(item);
    }
    return this;
  }

  /**
   * Converts this list into an array containing the data of each node.
   * - Time: O(n) linear.
   * - Space: O(n).
   * @returns {Array<any>} An array of each node's data.
   */
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

/******************************************************************* 
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);

// Print your list like so:
console.log(unorderedList.toArr());
console.log(unorderedList.secondToLast());
console.log("attempting to remove: -2 " + unorderedList.removeVal(-2));
console.log("attempting to remove: 4 " + unorderedList.removeVal(4));
console.log("attempting to remove: -5 " + unorderedList.removeVal(-5));
console.log("attempting to remove: 2 " + unorderedList.removeVal(2));
console.log(unorderedList.toArr());
console.log(unorderedList.prepend(5, -10));
console.log(unorderedList.toArr());
console.log(unorderedList.prepend(5, 6));
console.log(unorderedList.toArr());
console.log(unorderedList.prepend(5, -7));
console.log(unorderedList.toArr());
console.log(unorderedList.prepend(5, 323));
console.log(unorderedList.toArr());
