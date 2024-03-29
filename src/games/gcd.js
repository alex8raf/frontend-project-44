import runGameEngine from '../engine.js';
import generateRandomNumber from '../utility.js';

const gamesRule = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  const smallestNumber = number1 < number2 ? number1 : number2;
  for (let i = smallestNumber; i >= 1; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      return i;
    }
  }
  return number1;
};

const generateRound = () => {
  const number1 = generateRandomNumber(1);
  const number2 = generateRandomNumber(1);

  const rightAnswer = getGCD(number1, number2);
  const question = `${'Question:'} ${number1} ${number2}`;

  return [question, String(rightAnswer)];
};

export default () => runGameEngine(gamesRule, generateRound);
