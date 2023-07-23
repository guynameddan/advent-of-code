const fs = require('fs');

let sum = 0;
let max = 0;

// fs.readFile('adventofcode.com_2022_day_1_input.txt', (err, inputD) => {
fs.readFile('test1.txt', (err, inputD) => {

    if (err) throw err;
    
    console.log(inputD.toString());
    console.log(inputD.length);

    // if inputD is a number add it to sum
    // else compare the current sum to the max
    // replace if greater than max

    // Note: may need to use Math.

    // if (inputD !== "") {
    //     console.log("hello");
    // } else {
    //     return;
    // }
})