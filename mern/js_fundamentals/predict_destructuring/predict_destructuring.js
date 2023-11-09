// // 1)
// const cars = ["Tesla", "Mercedes", "Honda"];
// const [randomCar] = cars;
// const [, otherRandomCar] = cars;
// //Predict the output
// console.log(randomCar); //it will print the first indexed value which is Tesla
// console.log(otherRandomCar); //This will print Mercedes

// // 2)
// const employee = {
//   name: "Elon",
//   age: 47,
//   company: "Tesla",
// };
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); //on line 15 the name key word is assigned to otherName therefore it will be an error
// console.log(otherName); //Its going to print Elon, but because of the above error its not going to run

// // 3)
// const person = {
//   name: "Phil Smith",
//   age: 47,
//   height: "6 feet",
// };
// const password = "12345";
// const { password: hashedPassword } = person;
// //Predict the output
// console.log(password); //This will print 12345
// console.log(hashedPassword); //This will not print anything (undefined) since there is no password in the person object

// // 4)
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [, first] = numbers;
// const [, , , second] = numbers;
// const [, , , , , , , , third] = numbers;
// //Predict the output
// console.log(first == second); //compares 2 and 5 which means false
// console.log(first == third); //compares 2 and 2 which means true

// 5)
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); //prints value
console.log(secondKey); //prints 1, 5, 1, 8, 3, 3
console.log(secondKey[0]); // prints 1
console.log(willThisWork); // prints 5, the second indexed value
