/*
  Interview Question:
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
  Determine whether or not it is possible for the string's characters to be
  rearranged into a palindrome.
*/

// racecar
// radar
// tacocat
// levle
// kayak

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

//                V
const str5 = "aadda";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

//     v
// baabcceee

/* 
  For a string to be able to be re-ordered into a palindrome
  It must have an even occurrence of every character
  Unless it is odd length, then it can have 1 character that
  can have an odd number of occurrences.
  Another way to look at it would be, if you cancel out ever char that has a pair,
  it can be a palindrome if you are left with 0 or 1 char remaining:
    - "dad" the "d" cancels with itself to leave "a"
    - "daad" the "d" and "a" cancel with itself to leave nothing
    - "daam" the "a" cancels with itself leaving "dm", more than 1 char remaining, can't be palindrome
*/
// declare an object that keeps count of the character count (charObj)
// declare flag = str.length %2
// enhanced forloop to iterate over the str (for cont char of str)
// if the key does not exist then add the key , but if it exists then increment by one
// let count initialize it to zero;
// enhanced for loop to go over the values in the object
// count += numCount %2;
// return (count - flag === 0)
function canBecomePalindrome(str) {
  if (str.length == 0) return false;

  const charObj = {};
  let flag = str.length % 2;
  for (const char of str) {
    charObj[char] = charObj[char] === undefined ? 1 : charObj[char] + 1;
  }

  let count = 0;

  for (const numCount of Object.values(charObj)) {
    count += numCount % 2;
  }

  return count - flag === 0;
}

console.log(canBecomePalindrome(str1), "Should be:", expected1);
console.log(canBecomePalindrome(str2), "Should be:", expected2);
console.log(canBecomePalindrome(str3), "Should be:", expected3);
console.log(canBecomePalindrome(str4), "Should be:", expected4);
console.log(canBecomePalindrome(str5), "Should be:", expected5);

// console.log(canBecomePalindrome(str1) === expected1); // false
// console.log(canBecomePalindrome(str2) === expected2); // true
// console.log(canBecomePalindrome(str3) === expected3); // true
// console.log(canBecomePalindrome(str4) === expected4); // true
// console.log(canBecomePalindrome(str5) === expected5); // true
