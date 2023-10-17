// const fs = require('fs');

// // let sum = 0;
// let max = 0;

// // fs.readFile('adventofcode.com_2022_day_1_input.txt', (err, inputD) => {
// fs.readFile('test1.txt', (err, data) => {

//     if (err) throw err;

//     let sum = 0;
//     sum = data.toString();

//     console.log(sum);
// })

// // console.log(sum);
// console.log("hello");

const fs = require('fs');

function readFileLines(filename) {
    return fs.readFileSync(filename);
}

let arr = readFileLines('test1.txt');
// console.log(arr.toString());
console.log(arr);
console.log(Number(arr));
console.log(arr.length);