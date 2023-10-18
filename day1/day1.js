const fs = require('fs');

// Every line gets converted to a string because readFileSync returns
// a buffer. Then strings have carriage return replaced, split into array
// separated by /n, and finally converted to integers.
function readFileLinesToInt(filename) {
    // let calorieList = fs.readFileSync(filename).toString().replace(/\r/g, "").split(/\n/).map(Number);
    return fs.readFileSync(filename).toString().replace(/\r/g, "").split(/\n/).map(Number);
}

function areNumbers(val) {
    return typeof val === "number";
}

let arr = readFileLinesToInt('test2.txt');

if (!arr.map(function(val) {return areNumbers(val);})) {
    console.log("NaN. Please make sure all lines are numbers.");
    return;
}

// A.map(function(a) {return doOpSingle2(a,theFlag);});


let currSum = 0;
let max = 0;
let sumArr = [];
let endOfArr = arr.length;

// O(N)
for (let idx = 0; idx <= endOfArr; idx++) {
    if (arr[idx] === 0 || idx === endOfArr) {
        max = Math.max(currSum, max);
        sumArr.push(currSum);
        currSum = 0;
    } else {
        currSum += arr[idx];
    }
}

// Answer to part 1:
// console.log("max is " + max);

// Sort array of sums in descending order
// O(NlogN)
sumArr.sort((a,b) => (b - a));

// Sum the top 3
// O(N)
let top3Sum = sumArr.slice(0,3).reduce((sum, num) => sum + num);

// and finally print part 2 sol'n
console.log("Sum of top 3: " + top3Sum);