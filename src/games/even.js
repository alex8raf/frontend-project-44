import runGameEngine from '../engine.js';
import generateRandomNumber from '../utility.js';

const gamesRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber();

  const isEvenOrNot = () => (isEven(number) ? 'yes' : 'no');

  const rightAnswer = isEvenOrNot(number);
  const question = `${'Question:'} ${number}`;

  return [question, rightAnswer];
};

export default () => runGameEngine(gamesRule, generateRound);
