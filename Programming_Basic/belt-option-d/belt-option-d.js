/*
 * White Belt - Option D
 * Your Name: _Abel Woldemichael__________________
 */

// Question 1
// Predict the result of the following code.

var answer = 6 + 3 / 3;
console.log(answer);

/*
 * Your answer: _7________________
 */

// Question 2
// Predict the result of the following code.

var answer = (6 + 3) / 3;
console.log(answer);

/*
 * Your answer: _______3__________
 */

// Question 3
// Predict the result of the following code.

for(var i=1; i<25; i++) {
    console.log(i);
    i += 4; //i=i+4; when i =5 i=6 10 15 16
}

/*
 * Your answer: ____1,6,11,16,21_____________
 */

// Question 4
// Predict the result of the following code.

for(var i=22; i>5; i--) {
    console.log(i);
    i -= 4; //i=i-4; 18 17 13 12 8 7
}

/*
 * Your answer: __22,17,12,7_______________
 */

// Question 5
// Predict the result of the following code.

var i = 11;
if(i % 2 == 0) {
    console.log("even");
} else {
    console.log(i);
}

/*
 * Your answer: ___11______________
 */

// Question 6
// Predict the result of the following code.

for(var i=9; i>2; i--) {
    if(i % 2 == 0) {
        console.log("even"); //8 6 4
    } else {
        console.log(i);
    }
}

/*
 * Your answer: __9,even,7,even,5,even,3 _______________
 */

// Question 7
// Predict the result of the following code.

var arr = [1, 4, 7, 6, 2, 7];
var count = 0;
for(var i=0; i<arr.length; i++) {
    if(arr[i] < 5) {
        count++;
    }
}
console.log(count);

/*
 * Your answer: _____3____________
 */

// Question 8
// Complete the function in the code below to console log all numbers from 112 to 168.

function print112to168() {
    // your code here
    for(var i=112; i<=168;i++) {        // i am assuming this means including 112 and 168.
        console.log(i);
    }
}

print112to168();

// Question 9
// Complete the function in the code below to return the average of all of the values of an array.
// Given: [3, 6, 5, 9, 2]
// Return: 5

function findAverage(arr) {
    var currentSum = 0;
    // your code here
    for(var i=0; i<arr.length; i++){

        currentSum = currentSum + arr[i];

    }
    return currentSum / arr.length;
}

findAverage([12, 21, 3.6, 9, 12, 8]);

// Question 10
// Complete the function in the code below to return a count of all of the negative values in the array.
// Given: [-3, 6, -4, 9, 2]
// Return: 2

function countNegatives(arr) {
    var count = 0;
    // your code here
    for(var i=0; i<arr.length; i++){
        if(arr[i] <0){
            count++
        }
    }
    return count;
}

countNegatives([12, -21, 3.6, 9, 12, -8]);