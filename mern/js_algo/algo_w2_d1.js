var arr1 = [1, 3, 3, 5, 8, 10];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];

function mergeDedupe(arr1, arr2) {
  // let a new array to push the new nondupe elements
  let newArr = [];
  //merge the two arrays using the .concat method, check if the arrays are merged
  let newMerge = arr1.concat(arr2);
  // console.log(newMerge.length);
  // console.log(newMerge);
  // forloop using the mergedarray length to go over all the values

  for (let i = 0; i < newMerge.length; i++) {
    // a conditional with the method indexOf(- pass the merged array, which checks the array and returns the index of the first occurrence, if not found it will return -1 )on the newArr that is empty to make sure we are only passing the first nondupe value.
    if (newArr.indexOf(newMerge[i]) === -1) {
      // if its not duplicated push the value to the new array
      newArr.push(newMerge[i]);
    }
  }
  // return the newArr
  return newArr;
}

console.log(mergeDedupe(arr1, arr2));
console.log("**********************************");
console.log(mergeDedupe(arrA, arrB));
