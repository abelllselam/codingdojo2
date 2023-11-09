/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "White", age: 31 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
  firstName: "Bob",
  age: 31,
};
// return a new list of objects containing the same key pair values
const output1 = [
  { firstName: "Bob", lastName: "Robert", age: 31 },
  { firstName: "Bob", lastName: "White", age: 31 },
  // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
  lastName: "Smith",
};
const output2 = [
  { firstName: "John", lastName: "Smith", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
  // PSEUDOCODE!!!!
  // let results = [];
  // for (const key in items) {
  //   results.push(items.find((searchObj) => key.includes(searchObj)));
  // }
  // return results;
  // for (const key in items) {
  //   if (searchObj.includes(key)) {
  //     results.push([key, items[key]]);
  //   }
  // }
  // return results;
  return items.filter((item) => {
    for (const key in searchObj) {
      if (searchObj[key] !== item[key]) {
        return false;
      }
    }
    return true;
  });
}

console.log(findObjectsFilter(searchFor1, items), "\nexpected: ", output1);
console.log("**********************************************");
console.log(findObjectsFilter(searchFor2, items), "\nexpected: ", output2);
// findObjectsFilter(searchFor2, items)
