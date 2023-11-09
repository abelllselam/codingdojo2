/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16;
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11];

output = [
  [2, 5, 3, 6],
  [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

function consuc_sums(arr, k) {
  // create an array named output
  let output = [];
  // for loop to iterate through each index value
  for (let i = 0; i < arr.length - 1; i++) {
    // initialize the a temp sum to zero
    let sum = 0;
    // create an empty array to store the values that are being summed
    let tempArr = [];
    // add the current value to sum
    sum += arr[i];
    // if condition to check target is less than or equal to the sum value
    if (k >= sum) {
      // push to the group array
      tempArr.push(arr[i]);
      console.log(tempArr);
    }
    // else
    else {
      // push the array to the output array
      output.push(tempArr);
    }
  }

  // return the output array
  return output;
}

console.log(consuc_sums(arr, k), "should be: ", output);
// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// create the function and decide what params it needs and what it will return here:
