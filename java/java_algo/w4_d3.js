class QueueNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Class to represent a queue to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
  constructor() {
    this.head;
  }

  enqueue(item) {
    let runner = this.head;
    if (this.head == null) {
      this.head = new QueueNode(item);
      return this;
    }
    while (runner.next != null) {
      runner = runner.next;
    }
    runner.next = new QueueNode(item);
    return this;
  }

  dequeue() {
    if (this.head == null) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return temp.data;
  }

  /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
  // compareQueues(q2) {
  //   runner1 = this.head;
  //   runner2 = q2.head;

  //   while (runner1 && runner2) {
  //     if (runner1.data != runner2.data) {
  //       return false;
  //     }
  //     runner1 = runner1.next;
  //     runner2 = runner2.next;
  //   }
  //   return true;
  // }
  compareQueues(q2) {}

  /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean}
   */
  isPalindrome() {}
}

const queue1 = new Queue();

const queue2 = new Queue();

const queue3 = new Queue();

queue1.enqueue(45);
queue1.enqueue(55);
queue1.enqueue(65);

queue2.enqueue(45);
queue2.enqueue(55);
queue2.enqueue(65);

queue3.enqueue(65);
queue3.enqueue(55);
queue3.enqueue(45);
