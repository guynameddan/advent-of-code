import * as fs from 'fs'

// const calories = fs.readFileSync('./test1.txt', 'utf-8');
const calories = fs.readFileSync('./input.txt', 'utf-8');

const calArr = calories.split('\r\n'); //.map(Number);
let max = 0;
let sum = 0;

function findMax(cals: number[]): number {
    for (let i = 0; i < cals.length; i++) {
        if (cals[i] === 0) {
            max = Math.max(sum, max);
            sum = 0;
        } else {
            sum += cals[i];
        }
    }

    return max;
}

// console.log(findMax(calArr));
console.log(calArr);