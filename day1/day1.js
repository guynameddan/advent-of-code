const fs = require('fs');

// Every line gets converted to a string because readFileSync returns
// a buffer. Then strings have carriage return replaced, split into array
// separated by /n, and finally converted to integers.
function readFileLinesToInt(filename) {
    return fs.readFileSync(filename).toString().replace(/\r/g, "").split(/\n/).map(Number);
}

// verify each entry is a number
function areNumbers(arr) {
    // brute force method

    let endOfArr = arr.length;

    // TO DO: FIND CLEANER MORE EFFICIENT SOL'N?
    for (let idx = 0; idx < endOfArr; idx++) {
        if (isNaN(arr[idx])) {
            throw new Error("1 or more lines NaN");
        }
    }

    return arr;
}
// test output
// let calorieList = readFileLinesToInt('test2.txt');

let calorieList = readFileLinesToInt('input.txt');

try {
    areNumbers(calorieList);
} catch (e) {
    console.log(e);
    return;
}

let currSum = 0;
let max = 0;
let sumArr = [];
let endOfArr = calorieList.length;

// O(N)
for (let idx = 0; idx <= endOfArr; idx++) {
    if (calorieList[idx] === 0 || idx === endOfArr) {
        max = Math.max(currSum, max);
        sumArr.push(currSum);
        currSum = 0;
    } else {
        currSum += calorieList[idx];
    }
}

// Answer to part 1:
// console.log("max is " + max);

// Sort array of sums in descending order - O(NlogN)
sumArr.sort((a,b) => (b - a));

// Sum the top 3 - O(N)
let top3Sum = sumArr.slice(0,3).reduce((sum, num) => sum + num);

// and finally print part 2 sol'n
console.log("Sum of top 3: " + top3Sum);