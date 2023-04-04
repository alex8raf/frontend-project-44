import runGameEngine from '../engine.js';
import generateRandomNumber from '../utility.js';

const gamesRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeOrNot = (number) => (isPrime(number) ? 'yes' : 'no');

const generateRound = () => {
  const number = generateRandomNumber(2, 100);

  const rightAnswer = isPrimeOrNot(number);
  const question = `${'Question:'} ${number}`;

  return [question, rightAnswer];
};

const runGame = () => {
  runGameEngine(gamesRule, generateRound);
};

export default runGame;
