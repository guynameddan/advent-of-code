const fs = require('fs');

function readFileLines(filename) {
    return fs.readFileSync(filename).toString().replace(/\r/g, "").split(/\n/).map(Number);
}

// test1.txt sums should be 48559 and 41560
let arr = readFileLines('test1.txt');

console.log(arr);

let sumArr = [];
let currSum = 0;

for (let i=0; i<=arr.length; i++) {
    if (arr[i] === 0 || i === arr.length) {
        sumArr.push(currSum);
        currSum = 0;
    } else {
        currSum += arr[i];
    }
}

console.log(sumArr);