/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
function trim(str) {
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    console.log(str.length);
    if ((str = " ")) {
      str = str[i + 1];
    } else {
      newStr += str;
      console.log(newStr);
    }
  }

  return newStr;
}

console.log(trim(str1, "should be: ", expected1));

/*****************************************************************************/
