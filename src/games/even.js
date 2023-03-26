import runGameEngine from '../index.js';
import getRandomNumber from '../utility.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = () => {
  const number = getRandomNumber();
  if (number % 2 === 0) {
    return [number, 'yes'];
  }
  return [number, 'no'];
};

const runGame = () => {
  const [number, rightAnswer] = isEven();
  const question = `${'Question:'} ${number}`;
  return [question, rightAnswer];
};

runGameEngine(rules, runGame);

export default runGame;
