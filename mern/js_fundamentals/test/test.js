// const beatles = ["Paul", "George", "John", "Ringo"];
// function actuallyPrintingNames(names) {
//   let index = 0;
//   let name;
//   for (; index < names.length; index++) {
//     name = names[index];
//     console.log(name + " was found at index " + index);
//   }
//   console.log("name and index after loop is " + name + ":" + index);
// }

// actuallyPrintingNames(beatles);

// var foo; // 'foo' is a declaration, it's global and gets hoisted
// function magic() {
//   // 'magic()' also gets hoisted to the top
//   var foo; // here 'foo' is declared within 'magic()' and gets hoisted to the top of it's scope
//   foo = "hello world"; // we assign a value to our function scoped 'foo'
//   console.log(foo); // we log it as 'hello world'
// }
// foo = "bar"; // here, we assign a value to the global 'foo'
// magic(); // magic is called, the first console.log runs
// console.log(foo); // finally we log the global foo

// magicalUnicorns();
// var magicalUnicorns = function () {
//   console.log("Will it blend?");
// };
// console.log("Don't breathe this!");

// const animals = ["horse", "dog", "fish", "cat", "bird"];
// const [...otherAnimals] = animals;
// console.log(otherAnimals);
// // => ['fish', 'cat', 'bird']

const person = {
  firstName: "Bob",
  lastName: "Marley",
  email: "bob@marley.com",
  password: "sekureP@ssw0rd9",
  username: "barley",
  addresses: [
    {
      address: "1600 Pennsylvania Avenue",
      city: "Washington, D.C.",
      zipcode: "20500",
    },
    {
      address: "221B Baker St.",
      city: "London",
      zipcode: "WC2N 5DU",
    },
  ],
  createdAt: 1543945177623,
};

const personCopy = { ...person };
console.log(personCopy);
