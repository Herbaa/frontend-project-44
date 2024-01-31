#!/usr/bin/env node
import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

const userName = greeting();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const task = () => {
    const q = Math.round(Math.random() * 100);
    let a = '';
    if(q % 2 === 0) {
        a = 'yes';
    } else {
        a = 'no';
    }
    return [q, a]
};

let mark = 0;

for(let i = 1; i <= 3; i += 1) {
    const step = task(); // [q, a]
    console.log(`Question: ${step[0]}`);
    const answer = readlineSync.question('Answer: ');

    if(answer === step[1]) {
        console.log('Correct!')
        mark += 1;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${step[1]}`);
        console.log(`Let's try again, ${userName}`);
        break
    }
}

if (mark === 3) {
    console.log(`Congratulations, ${userName}!`)
}