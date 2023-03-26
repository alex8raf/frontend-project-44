import runGameEngine from '../index.js';
import getRandomNumber from '../utility.js';

const rules = 'What is the result of the expression?';

const getOperation = () => {
  const index = getRandomNumber(3);
  switch (index) {
    case 0:
      return '+';
    case 1:
      return '-';
    default:
      return '*';
  }
};

const runGame = () => {
  const number1 = getRandomNumber(50);
  const number2 = getRandomNumber(50);
  const expression = `${number1} ${getOperation()} ${number2}`;
  const question = `${'Question:'} ${expression}`;
  const getRightAnswer = () => {
    switch (expression) {
      case `${number1} + ${number2}`:
        return [number1 + number2];
      case `${number1} - ${number2}`:
        return [number1 - number2];
      default:
        return [number1 * number2];
    }
  };
  const rightAnswer = getRightAnswer();
  return [question, String(rightAnswer)];
};

runGameEngine(rules, runGame);

export default runGame;
