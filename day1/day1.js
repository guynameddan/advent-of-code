const fs = require('fs');

// Every line gets converted to a string because readFileSync returns
// a buffer. Then strings have carriage return replaced, split into array
// separated by /n, and finally converted to integers.
function readFileLines(filename) {
    return fs.readFileSync(filename).toString().replace(/\r/g, "").split(/\n/).map(Number);
}

// test1.txt sums should be 48559 and 41560
// let arr = readFileLines('test1.txt');
let arr = readFileLines('input.txt');
let currSum = 0;
let max = 0;
let sumArr = [];

// O(N)
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === 0 || i === arr.length) {
        max = Math.max(currSum, max);
        sumArr.push(currSum);
        currSum = 0;
    } else {
        currSum += arr[i];
    }
}

// console.log("max is " + max);

// Sort array of sums in descending order, take the top 3 entries,
// sum the top 3, and finally print

// O(NlogN)
sumArr.sort((a,b) => (b - a));

// O(N)
let top3Sum = sumArr.slice(0,3).reduce((sum, num) => sum + num);

console.log("Sum of top 3: " + top3Sum);