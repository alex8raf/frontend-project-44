import gameEngine from '../index.js';
import { getRandomNumber, getRandomIndex } from '../utility.js';

const calcGame = () => {
  const rules = 'What is the result of the expression?';
  const game = () => {
    const number1 = getRandomNumber(50);
    const number2 = getRandomNumber(50);
    const operationAndAnswer = () => {
      const index = getRandomIndex(3);
      switch (index) {
        case 0:
          return ['+', number1 + number2];
        case 1:
          return ['-', number1 - number2];
        default:
          return ['*', number1 * number2];
      }
    };
    const [operation, rightAnswer] = operationAndAnswer();
    const question = `${'Question:'} ${number1} ${operation} ${number2}`;
    return [question, String(rightAnswer)];
  };

  gameEngine(rules, game);
};
export default calcGame;
