import runGameEngine from '../index.js';
import getRandomNumber from '../utility.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = () => {
  const number = getRandomNumber();
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return [number, 'no'];
    }
  }
  return [number, 'yes'];
};

const runGame = () => {
  const [number, rightAnswer] = isPrime();
  const question = `${'Question:'} ${number}`;
  return [question, rightAnswer];
};

runGameEngine(rules, runGame);

export default runGame;
