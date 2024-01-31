#!/usr/bin/env node
import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

const userName = greeting();

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

console.log('Find the greatest common divisor of given numbers.');

let corr = 0;

while(corr < 3) {
    let ranNum1 = randomNum(1, 100);
    let ranNum2 = randomNum(1, 100); 

    const getGCD = (ranNum1, ranNum2) => {
        if (!ranNum2) {
          return ranNum1;
        } else {   
          return getGCD(ranNum2, ranNum1 % ranNum2)
    }
      }

let correctAns = getGCD(ranNum1, ranNum2);

console.log(`Question: ${ranNum1} ${ranNum2}`);
const answer = readlineSync.question('Your answer: ');


     if (correctAns === Number(answer)) {
        corr += 1;
        console.log('Correct');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAns}'.`);
        console.log(`Let's try again, ${userName}!`)
        break;
      }
    
    if (corr === 3) {
    console.log(`Congratulations, ${userName}!`); 
    }  
};