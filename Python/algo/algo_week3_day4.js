/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
  const changes = {
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  const result = {};

  for (const change in changes) {
    const value = changes[change];
    const count = Math.floor(cents / value);

    if (cents > 0) {
      result[change] = count;
      cents -= count * value;
    }

    if (cents === 0) {
      break;
    }
  }

  return result;
}

console.log(fewestCoinChange(cents1), "should be:", expected1);
console.log(fewestCoinChange(cents2), "should be:", expected2);
console.log(fewestCoinChange(cents3), "should be:", expected3);
console.log(fewestCoinChange(cents4), "should be:", expected4);

/*****************************************************************************/
