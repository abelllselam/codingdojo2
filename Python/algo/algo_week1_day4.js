/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "oho!";
const expected4 = false;

/**
 * Determines if the given str is a palindrome (same forwards and backwards).
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str is a palindrome or not.
 */
function isPalindrome(str) {
  // newStr = " ";
  // newStr = str;

  // newStr.split().reverse().join();

  // console.log(newStr);

  if (newStr === str) {
    return true;
  } else {
    return false;
  }
  // console.log(newStr);
}

console.log(isPalindrome(str1), "should be:", expected1);
console.log(isPalindrome(str2), "should be:", expected2);
console.log(isPalindrome(str3), "should be:", expected3);
console.log(isPalindrome(str4), "should be:", expected4);

/*****************************************************************************/
