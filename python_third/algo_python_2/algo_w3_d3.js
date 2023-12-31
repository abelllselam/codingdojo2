// /*
//   Given a SORTED array of integers, dedupe the array
//   Because array elements are already in order, all duplicate values will be grouped together.

//   Ok to use a new array

//   Bonus: do it in O(n) time (no nested loops, new array ok)
//   Bonus: Do it in-place (no new array)
//   Bonus: Do it in-place in O(n) time and no new array
//   Bonus: Keep it O(n) time even if it is not sorted
// */

// const nums1 = [1, 1, 1, 1];
// const expected1 = [1];

// const nums2 = [1, 1, 2, 2, 3, 3];
// const expected2 = [1, 2, 3];

// const nums3 = [1, 1, 2, 3, 3, 4];
// const expected3 = [1, 2, 3, 4];

// const nums4 = [1, 1];
// const expected4 = [1];

// /**
//  * De-dupes the given sorted array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums
//  * @returns {Array<number>} The given array deduped.
//  */
// function dedupeSorted(nums) {
//   const newArr = [];
//   for (const num of nums) {
//     // console.log(newArr.length - 1);
//     if (num !== newArr[newArr.length - 1]) {
//       // console.log(newArr.length - 1);
//       newArr.push(num);
//     }
//   }
//   return newArr;
// }

// console.log(dedupeSorted(nums1), "should equal:", expected1);
// console.log(dedupeSorted(nums2), "should equal:", expected2);
// console.log(dedupeSorted(nums3), "should equal:", expected3);
// console.log(dedupeSorted(nums4), "should equal:", expected4);

/*****************************************************************************/

/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const two_nums1 = [3, 5, 4, 3, 4, 6, 5];
const two_expected1 = 6;

const two_nums2 = [3, 5, 5];
const two_expected2 = 3;

const two_nums3 = [3, 3, 5];
const two_expected3 = 5;

const two_nums4 = [5];
const two_expected4 = 5;

const two_nums5 = [];
const two_expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
  newSorted = nums.sort();
  console.log(newSorted);
  newArr = [];

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    if (nums[i] != nums) {
      console.log(newArr.length - 1);
      newArr.push(nums[i]);
    }
  }
  return newArr;
}

console.log(firstNonRepeated(two_nums1), "should be: ", two_expected1);
