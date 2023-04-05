import runGameEngine from '../engine.js';
import generateRandomNumber from '../utility.js';

const gamesRule = 'What is the result of the expression?';

const calculateExpression = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return 'unexpected operator';
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 50);
  const number2 = generateRandomNumber(0, 50);

  const generateOperation = () => {
    const maxIndex = 3;
    const index = generateRandomNumber(0, maxIndex);
    const operations = ['+', '-', '*'];
    return operations[index];
  };

  const operation = generateOperation();
  const expression = `${number1} ${operation} ${number2}`;

  const question = `${'Question:'} ${expression}`;
  const rightAnswer = calculateExpression(number1, operation, number2);

  return [question, String(rightAnswer)];
};

export default () => runGameEngine(gamesRule, generateRound);
