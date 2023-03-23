import gameEngine from '../index.js';
import { getRandomNumber } from '../utility.js';

const isPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const game = () => {
    const number = getRandomNumber(100);
    const question = `${'Question:'} ${number}`;
    let rightAnswer = 'yes';
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        rightAnswer = 'no';
      }
    }
    return [question, rightAnswer];
  };

  gameEngine(rules, game);
};

export default isPrime;
