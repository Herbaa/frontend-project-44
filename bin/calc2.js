#!/usr/bin/env node
import greeting from '../src/cli.js';
import readlineSync from 'readline-sync';

const userName = greeting();

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

console.log('What is the result of the expression?');
    const task = () => {
      const num1 = randomNum(1, 100);
      const num2 = randomNum(1, 100);
   
      const signs = ['+', '-', '*'];
      const sign = signs[randomNum(0, 2)];
   
      const ques = `${num1} ${sign} ${num2}`;
   
      let result = 0;
      switch (sign) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        default:
          result = null;
      }
   
      return [ques, result];
    };

    let corr = 0;
    for (let i = 0; i < 3; i += 1) {
        const QuestionAndResult = task();
        console.log('Question: ', QuestionAndResult[0]);
        const answer = readlineSync.question('Your answer: ');
     
        const rightAnswer = `${QuestionAndResult[1]}`;
     
        if (answer === rightAnswer) {
          console.log('Correct!');
          corr += 1;
        } else {
          console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rightAnswer}"`)
          console.log(`Let's try again, ${userName}!`)
          break
        }
      }
     
      if (corr === 3){
      console.log(`Congratulations, ${userName}!`); }