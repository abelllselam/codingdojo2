// /*
//   Given in an alumni interview in 2021.

//   String Encode

//   You are given a string that may contain sequences of consecutive characters.
//   Create a function to shorten a string by including the character,
//   then the number of times it appears.

//   If final result is not shorter (such as "bb" => "b2" ),
//   return the original string.
//   */

// const str1 = "aaaabbcdddaaa";
// const expected1 = "a4b2c1d3a3";

// const str2 = "";
// const expected2 = "";

// const str3 = "a";
// const expected3 = "a";

// const str4 = "bbcc";
// const expected4 = "bbcc";

// /**
//  * Encodes the given string such that duplicate characters appear once followed
//  * by a number representing how many times the char occurs. Only encode strings
//  * when the result yields a shorter length.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str The string to encode.
//  * @returns {string} The given string encoded.
//  *
//  * steps below
//  */
// function encodeStr(str) {
//   if (str.length < 2) {
//     return str;
//   }

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     let count = 1;
//   }
// }

// console.log(encodeStr(str1), "expected: ", expected1);
// console.log(encodeStr(str2), "expected: ", expected2);
// console.log(encodeStr(str3), "expected: ", expected3);
// console.log(encodeStr(str4), "expected: ", expected4);
/*****************************************************************************/

// /*
//   String Decode
// */

// const two_str1 = "a3b2c1d3";
// const two_expected1 = "aaabbcddd";

// const two_str2 = "a3b2c12d10";
// const two_expected2 = "aaabbccccccccccccdddddddddd";

// /**
//  * Decodes the given string by duplicating each character by the following int
//  * amount if there is an int after the character.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str An encoded string with characters that may have an int
//  *    after indicating how many times the character occurs.
//  * @returns {string} The given str decoded / expanded.
//  */
// function decodeStr(str) {}

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
/**
 * The `decodeStr` function takes a string as input and decodes it by repeating each character a
 * certain number of times based on the digits that follow it.
 * @param str - The parameter `str` is a string that represents an encoded string.
 * @returns The code is returning the decoded string.
 */
function decodeStr(str) {
  let decoded = "";
  let currentChar = "";

  for (let char = 0; char < str.length; char++) {
    let digits = "";

    if (isNaN(str[char])) {
      currentChar = str[char];
      char++;

      while (!isNaN(str[char])) {
        digits += str[char];
        char++;
      }
    }
    for (let i = 1; i <= parseInt(digits); i++) {
      decoded += currentChar;
    }

    char--;
  }
  return decoded;
}

console.log(decodeStr(str1), "expected: ", expected1);
console.log(decodeStr(str2), "expected: ", expected2);
