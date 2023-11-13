/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                      V

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";
// RIOT
function stringMod(str) {
  const letterCount = {};
  // Iterate through the string to count letter occurrences
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    let count = 0;
    // Find the count for the current letter
    while (i + 1 < str.length && !isNaN(parseInt(str[i + 1]))) {
      count = count * 10 + parseInt(str[i + 1]);
      i++;
    }
    // Update letter count in the object
    letterCount[letter] = (letterCount[letter] || 0) + count;
  }
  // Create an array of [letter, count] pairs and sort alphabetically
  const sortedPairs = Object.entries(letterCount).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  // Build the rehashed string
  const rehashedStr = sortedPairs
    .map(([letter, count]) => letter + count)
    .join("");
  return rehashedStr;
  // let freqTable = {};
  // let temp = "";
  // for (let i = 0; i < str.length; i++) {
  //   let char = str[i];
  //   if (isNaN(parseInt(char))) {
  //     // Check if the character is not a number
  //     if (temp !== "") {
  //       // If there are accumulated digits, update the frequency table
  //       freqTable[char] = (freqTable[char] || 0) + parseInt(temp);
  //       temp = ""; // Reset temp
  //     }
  //   } else {
  //     // If it's a number, accumulate the digits
  //     temp += char;
  //   }
  // }
  // // Check for remaining accumulated digits
  // if (temp !== "") {
  //   freqTable["a"] = (freqTable["a"] || 0) + parseInt(temp);
  // }
  // const sortedPairs = Object.entries(freqTable).sort((a, b) =>
  //   a[0].localeCompare(b[0])
  // );
  // const rehashedStr = sortedPairs
  //   .map(([letter, count]) => letter + count)
  //   .join("");
  // return rehashedStr;
}

console.log(stringMod(str1), "should be: ", expected1);

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭
