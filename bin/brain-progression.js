#!/usr/bin/env node
import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

const userName = greeting();

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  };

console.log('What number is missing in the progression?');

const getProgression = () => {
    const firstProgress = randomNum(1, 20);
    const lengthProgress = randomNum(5, 10);
    const stepProgression = randomNum(1, 5);
    const numIndex = randomNum(0, stepProgression - 1);
  
    let arrProgress = [];
    let hiddenNum = 0;

    for(let i = firstProgress; arrProgress.length < lengthProgress; i += stepProgression) {
        arrProgress.push[i];
        arrProgress.join(' ');
      
      if(arrProgress.length - 1 === hiddenNum) {
        hiddenNum = i
        arrProgress[numIndex] = ('..');
      };      
  }
  const question = arrProgress;
  const answer = hiddenNum;

  return [question, answer];
}

let mark = 0;

const question = getProgression[0];
const correctAns = getProgression[1];

for(let i = 1; i <= 3; i += 1) {
    console.log(`Question: ${question} `);
    const answer = readlineSync.question('Answer: ');

    if(answer === correctAns) {
        console.log('Correct!') 
        mark += 1;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAns} `);
        console.log(`Let's try again, ${userName}`);
        break
    }
}

if (mark === 3) {
    console.log(`Congratulations, ${userName}!`)
}