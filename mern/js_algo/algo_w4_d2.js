/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//            v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""
const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> ""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

//pseudocode
// create a function compare inside the main function
// declare an empty array
// enhanced forloop to go over the the current string
// conditional to check if the current character is # and if the length of the array is not 0
// if the char passes the condition then pop the last value
// If the if statement is evaluated to false then push the current char to the array
// Use the join method and then return the current Str array
// then compare the two processed string values and return after strict comparison.

function backspaceStringCompare(S, T) {
  function compare(str) {
    const emptyArr = [];

    for (const char of str) {
      if (char === "#" && emptyArr.length > 0) {
        emptyArr.pop();
      } else if (char !== "#") {
        emptyArr.push(char);
      }
    }

    return emptyArr.join("");
  }

  return compare(S) === compare(T);
}

//---------------------

console.log(backspaceStringCompare(S1, T1), "should be:", expected1);
console.log(backspaceStringCompare(S2, T2), "should be:", expected2);
console.log(backspaceStringCompare(S3, T3), "should be:", expected3);
console.log(backspaceStringCompare(S4, T4), "should be:", expected4);
