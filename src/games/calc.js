import runGameEngine from '../engine.js';
import generateRandomNumber from '../utility.js';

const gamesRule = 'What is the result of the expression?';

const generateOperation = () => {
  const index = generateRandomNumber(0, 3);
  const operations = ['+', '-', '*'];
  return operations[index];
};

const calculateExpression = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 50);
  const number2 = generateRandomNumber(0, 50);

  const operation = generateOperation();
  const expression = `${number1} ${operation} ${number2}`;

  const question = `${'Question:'} ${expression}`;
  const rightAnswer = calculateExpression(number1, operation, number2);

  return [question, String(rightAnswer)];
};

const runGame = () => {
  runGameEngine(gamesRule, generateRound);
};

export default runGame;
