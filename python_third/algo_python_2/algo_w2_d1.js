// /*
//   Given an array of strings
//   return the number of times each string occurs (a frequency / hash table)
// */

// const arr1 = ["a", "a", "a"];
// const expected1 = {
//   a: 3,
// };

// const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//   a: 2,
//   b: 1,
//   c: 3,
//   B: 1,
//   d: 1,
// };

// const arr3 = [];
// const expected3 = {};

// /**
//  * Builds a frequency table based on the given array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<string>} arr
//  * @returns {Object<string, number>} A frequency table where the keys are items
//  *    from the given arr and the values are the amnt of times that item occurs.
//  */
// function makeFrequencyTable(arr) {
//   let fTable = {};

//   for (let value of arr) {
//     // console.log(value);
//     if (fTable[value] === undefined) {
//       // console.log(fTable[value]);
//       fTable[value] = 1;
//       // console.log(fTable[value]);
//     } else {
//       fTable[value]++;
//     }
//   }
//   return fTable;
// }

// console.log(makeFrequencyTable(arr1), "expected: ", expected1);
// console.log(makeFrequencyTable(arr2), "expected: ", expected2);
// console.log(makeFrequencyTable(arr3), "expected: ", expected3);

/*****************************************************************************/
/*
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const two_nums1 = [1];
const two_expected1 = 1;

const two_nums2 = [5, 4, 5];
const two_expected2 = 4;

const two_nums3 = [5, 4, 3, 4, 3, 4, 5];
const two_expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const two_nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const two_expected4 = 1;

function oddOccurrencesInArray(nums) {
  let newArr = [];
  console.log("***********************************");
  console.log(nums);
  console.log("***********************************");
  for (let value of nums) {
    console.log(value);
    if (nums.length < 1) {
      console.log(nums[0]);
      console.log("***********************************");
      return nums[0];
    }
  }
}

console.log(oddOccurrencesInArray(two_nums1), "expected: ", two_expected1);
console.log(oddOccurrencesInArray(two_nums2), "expected: ", two_expected2);
console.log(oddOccurrencesInArray(two_nums3), "expected: ", two_expected3);
console.log(oddOccurrencesInArray(two_nums4), "expected: ", two_expected4);
