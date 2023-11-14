import * as fs from 'fs'

// const calories = fs.readFileSync('./test1.txt', 'utf-8');
const calories = fs.readFileSync('./input.txt', 'utf-8');

let calArr: number[] = calories.split('\n').map(Number);
// calArr = calArr.split('\r').map(Number);

let max: number = 0;
let sum: number = 0;
let top3: number[] = [];

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

function findTop3(cals: number[]): number[] {
    for (let i = 0; i < cals.length; i++) {
        if (cals[i] === 0 || i === cals.length - 1) {
            top3.push(sum);
            sum = 0;
        } else {
            sum += cals[i];
        }
    }

    return top3;
}

top3 = findTop3(calArr);

// may reconsider using sort() cuz of shallow copy
let ordered = top3.sort((a, b) => b - a).slice(0,3);

let top3Sum = ordered.reduce((sum,num) => sum + num);

// console.log(findMax(calArr));
// console.log(calArr);

console.log(ordered);
console.log(top3Sum);