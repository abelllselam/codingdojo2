// // 1)
// console.log(hello);
// var hello = "world";

// // After hoisting by the interpreter:
// var hello;
// console.log(hello);
// hello = "world";

// // 2)
// var needle = "haystack";
// test();
// function test() {
//   var needle = "magnet";
//   console.log(needle);
// }

// // After hoisting by the interpreter:
// var needle = "haystack";
// test();
// function test() {
//   var needle = "magnet";
//   console.log(needle);
// }

// 3)
// var brendan = "super cool";
// function print() {
//   brendan = "only okay";
//   console.log(brendan);
// }
// console.log(brendan);
// console.log("****************");
// // After hoisting by the interpreter:
// var brendan = "super cool";
// print();
// function print() {
//   brendan = "only okay";
//   console.log(brendan);
// }
// console.log(brendan);

// // 4)
// var food = "chicken";
// console.log(food);
// eat();
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";
// }
// console.log("******************");
// // After hoisting by the interpreter:
// var food;
// food = "chicken";
// console.log(food);
// eat();
// function eat() {
//   var food;
//   food = "half-chicken";
//   console.log(food);
//   food = "gone";
// }

// // 5)
// mean();
// console.log(food);
// var mean = function () {
//   food = "chicken";
//   console.log(food);
//   var food = "fish";
//   console.log(food);
// };
// console.log(food);

// // After hoisting by the interpreter:
// mean();
// console.log(food);
// mean();
// var mean = function () {
//   var food;
//   food = "chicken";
//   console.log(food);
//   food = "fish";
//   console.log(food);
// };

// // 6)
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);
// console.log("***********");
// // After hoisting by the interpreter:
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// function rewind() {
//   var genre;
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);

// // 7)
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//   dojo = "seattle";
//   console.log(dojo);
//   var dojo = "burbank";
//   console.log(dojo);
// }
// console.log(dojo);

// // After hoisting by the interpreter:
// var dojo;
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//   var dojo;
//   dojo = "seattle";
//   console.log(dojo);
//   var dojo = "burbank";
//   console.log(dojo);
// }
// console.log(dojo);

// // 8)
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students) {
//   const dojo = {};
//   dojo.name = name;
//   dojo.students = students;
//   if (dojo.students > 50) {
//     dojo.hiring = true;
//   } else if (dojo.students <= 0) {
//     dojo = "closed for now";
//   }
//   return dojo;
// }

// After hoisting by the interpreter:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
makeDojo();
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
