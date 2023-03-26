import runGameEngine from '../index.js';
import getRandomNumber from '../utility.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGCD = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  if (number1 === 0) {
    return [number1, number2, number2];
  }
  if (number2 === 0) {
    return [number1, number2, number1];
  }

  if (number1 > number2) {
    for (let i = number2; i >= 1; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        return [number1, number2, i];
      }
    }
  }

  if (number1 < number2) {
    for (let i = number1; i >= 1; i -= 1) {
      if (number1 % i === 0 && number2 % i === 0) {
        return [number1, number2, i];
      }
    }
  }

  return [number1, number2, number1];
};

const runGame = () => {
  const [number1, number2, rightAnswer] = getGCD();
  const question = `${'Question:'} ${number1} ${number2}`;
  return [question, String(rightAnswer)];
};

runGameEngine(rules, runGame);

export default runGame;
