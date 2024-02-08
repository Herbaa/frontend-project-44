import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const gameBodyForPrime = (description, taskFunc) => {
    const playerName = greeting(); //приветствие 
    console.log(description); // правила игры

    let mark = 0;
    for(let i = 1; i <= 1; i += 1) {
        const step = taskFunc();

        console.log(`Question: ${step[0]}`)
        const answer = readlineSync.question('Answer: ');

    if(answer === step[1]) {
        console.log('Correct!')
        mark += 1;
    } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${step[1]}`);
        console.log(`Let's try again, ${playerName}`);
        break
    }
}

if (mark === 1) {
    console.log(`Congratulations, ${playerName}!`)
}
};
export default gameBodyForPrime;