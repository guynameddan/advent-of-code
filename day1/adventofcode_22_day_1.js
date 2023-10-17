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

for (let i=0; i<=arr.length; i++) {
    if (arr[i] === 0 || i === arr.length) {
        max = Math.max(currSum, max);
        currSum = 0;
    } else {
        currSum += arr[i];
    }
}

console.log(max);