// /*
// Given an array of ints representing a line of people where the space between
// indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
// that space,

// return whether or not there is at least 6 feet separating every person.

// Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
// */

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
  // check if the array is empty and only has 1 once
  if (queue[0] == ) {
    return true;
  }
  // create a count variable
  let count = 0;
  // use a for loop
  // index through the array
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] == 1) {
      console.log(queue[i]);
    }
    // check if the number is equal to 1
    // start counting when the number equals to 1
    //another nested if to check if the count is 6 when the next time the index is equal to 1
    // else continue to the top in the nested if statement
    // otherwise return false outside the for loop statement
  }
}

console.log(socialDistancingEnforcer(queue1), "expected:", expected1);
console.log(socialDistancingEnforcer(queue2), "expected:", expected2);
console.log(socialDistancingEnforcer(queue3), "expected:", expected3);
console.log(socialDistancingEnforcer(queue4), "expected:", expected4);
