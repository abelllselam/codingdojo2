// /*
//   Recursively reverse a string
//   helpful methods:

//   str.slice(beginIndex[, endIndex])
//   returns a new string from beginIndex to endIndex exclusive
// */

// const str1 = "abc";
// const expected1 = "cba";

// const str2 = "";
// const expected2 = "";

// /**
//  * Recursively reverses a string.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @returns {string} The given str reversed.
//  *
//  * 1. Edge case -> lowest pri after you get things working
//  * 2. Base case -> "loop" condition :: starts the stack going back
//  * 3. Recursive call -> often times is also a return statement. :: where the function calls itself.
//  *
//  */
// function reverseStr(str) {
//   if (str.length <= 1) {
//     return str;
//   }

//   return reverseStr(str.substring(1)) + str.charAt(0);
// }

// console.log(reverseStr(str1), "Should be: ", expected1);
// console.log(reverseStr(str2), "Should be: ", expected2);

/*****************************************************************************/

/*
  Recursive Binary Search

  Input: SORTED array of ints, int value
  Output: bool representing if value is found

  Recursively search to find if the value exists, do not loop over every element.

  Approach:
  Take the middle item and compare it to the given value.
  Based on that comparison, narrow your search to a particular section of the array
*/

const two_nums1 = [1, 3, 5, 6];
const two_searchNum1 = 4;
const two_expected1 = false;

const two_nums2 = [4, 5, 6, 8, 12];
const two_searchNum2 = 5;
const two_expected2 = true;

const two_nums3 = [3, 4, 6, 8, 12];
const two_searchNum3 = 3;
const two_expected3 = true;

/**
 * Add params if needed for recursion
 * Recursively performs a binary search (divide and conquer) to determine if
 * the given sorted nums array contains the given number to search for.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the searchNum was found in the sortedNums array.
 */
function binarySearch(sortedNums, searchNum) {}

console.log(binarySearch(two_nums1), "Should be: ", two_searchNum1);
console.log(binarySearch(two_nums2), "Should be: ", two_searchNum2);
console.log(binarySearch(two_nums3), "Should be: ", two_searchNum3);
