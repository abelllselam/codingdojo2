/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

const nums4 = [1, 2, 3, 4, 5];
const expected4 = 15;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums) {
  // Base case: If the array is empty, return 0.
  if (nums.length === 0) {
    return 0;
  }

  // Recursive case: Add the first element to the sum of the rest of the array.
  return nums[0] + sumArr(nums.slice(1));
}

console.log(sumArr(nums1), "expected:", expected1);
console.log(sumArr(nums2), "expected:", expected2);
console.log(sumArr(nums3), "expected:", expected3);
console.log(sumArr(nums4), "expected:", expected4);
/**********************4***************************4**************************/
