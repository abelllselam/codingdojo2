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
function isPalindrome(str) {}

console.log(isPalindrome(str1), "expected: ", expected1);

// *********************************************************************************************
/*
Longest Palindrome

For this challenge, we will look not only at the entire string provided,
but also at the substrings within it.
Return the longest palindromic substring.

Strings longer or shorter than complete words are OK.

All the substrings of "abc" are:
a, ab, abc, b, bc, c
*/

const two_str1 = "what up, daddy-o?";
const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */
function longestPalindromicSubstring(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++)
    for (let j = str.length - 1; j >= i; j--) {
      // console.log(str[i], str[j]);
      if (str[i] === str[j]) {
        if (str[i + 1] === str[j + 1]) {
          // console.log(str[j], "and the i value", str[i]);
          newStr += str[i];
        }
      }
    }
  return newStr;
}

console.log(longestPalindromicSubstring(two_str1), "expected: ", two_expected1);

// // ***************************************************************************************************

// /*
//   Given an arr and a separator string, output a string of every item in the array separated by the separator.

//   No trailing separator at the end
//   Default the separator to a comma with a space after it if no separator is provided
// */

// const three_arr1 = [1, 2, 3];
// const three_separator1 = ", ";
// const three_expected1 = "1, 2, 3";

// const three_arr2 = [1, 2, 3];
// const three_separator2 = "-";
// const three_expected2 = "1-2-3";

// const three_arr3 = [1, 2, 3];
// const three_separator3 = " - ";
// const three_expected3 = "1 - 2 - 3";

// const three_arr4 = [1];
// const three_separator4 = ", ";
// const three_expected4 = "1";

// const three_arr5 = [];
// const three_separator5 = ", ";
// const three_expected5 = "";

// /**
//  * Converts the given array into a string of items separated by the given separator.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<string|number|boolean>} arr The items to be joined as a string.
//  * @param {string} separator To separate each item of the given arr.
//  * @returns {string} The given array items as a string separated by the given separator.
//  */
// function join(arr, separator) { }
