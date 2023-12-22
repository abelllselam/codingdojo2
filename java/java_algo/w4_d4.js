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
    this.length = 0;
  }

  enqueue(item) {
    let runner = this.head;
    this.length++;
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
    this.length--;
    if (this.head == null) {
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    return temp.data;
  }

  /**
   * Determines whether the sum of the left half of the queue items is equal to
   * the sum of the right half. Avoid indexing the queue items directly via
   * bracket notation, use the queue methods instead for practice.
   * Use no extra array or objects.
   * The queue should be returned to it's original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {boolean} Whether the sum of the left and right halves is equal.
   */
  isSumOfHalvesEqual() {}
}

const queue1 = new Queue();

const queue2 = new Queue();

const queue3 = new Queue();

queue1.enqueue(45);
queue1.enqueue(55);
queue1.enqueue(45);

queue2.enqueue(45);
queue2.enqueue(55);
queue2.enqueue(65);
queue2.enqueue(65);

queue3.enqueue(55);
queue3.enqueue(45);
queue3.enqueue(55);
queue3.enqueue(45);
