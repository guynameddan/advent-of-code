import * as fs from 'fs'

const calories: string = fs.readFileSync('./test1.txt', 'utf-8');

// how do i write this in TS instead?
// const calories = fs.readFileSync('./input.txt', 'utf-8');

const calArr: ReadonlyArray<string> = calories.replace(/\r/g, "").split(/\n/); //.map(Number);
// calArr = calArr.split('\r').map(Number);


// check each line is a number
function isNum(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            throw new Error("At least one line is NaN");
        }
    }

    return arr;
}

let max: number = 0;
let sum: number = 0;
let top3: number[] = [];

/**
 *  To do:
 *      -use vite/vitest to setup tests? if so, how? or just stick with unit tests?
 */

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

function findTop3(cals: ReadonlyArray<string>): number[] {
    for (let i = 0; i < cals.length; i++) {
        if (cals[i] === "" || i === cals.length - 1) {
            top3.push(sum);
            sum = 0;
        } else {
            sum += Number(cals[i]);
        }
    }

    return top3;
}



// top3 = findTop3(calArr);

// // may reconsider using sort() cuz of shallow copy
// let ordered = top3.sort((a, b) => b - a).slice(0,3);

// let top3Sum = ordered.reduce((sum,num) => sum + num);