import * as fs from 'fs'

const calories = fs.readFileSync('./test1.txt', 'utf-8');
const calArr = calories.split('\r\n');

console.log(calArr);