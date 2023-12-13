import * as fs from 'fs'

// const input: string = fs.readFileSync('./test2.txt', 'utf-8');
const input: string = fs.readFileSync('./input.txt', 'utf-8');
const rounds: string[] = input.replace(/\r/g, '').split(/\n/);

let totalScore: number = 0;

for (let i = 0; i < rounds.length; i++) {
    totalScore += result(rounds[i]);
}

function result(round: string): number {
    let score = 0;
    let choiceScore = round.charCodeAt(2) - 'W'.charCodeAt(0);

    // lost
    if (round === 'A Z' || round === 'B X' || round === 'C Y') {
        score += 0;
    }
    
    // draw
    if (round === 'A X' || round === 'B Y' || round === 'C Z') {
        score += 3;
    }

    // won
    if ( round === 'A Y' || round === 'B Z' || round === 'C X') {
        score += 6;
    }

    return score + choiceScore;
}

console.log(totalScore);