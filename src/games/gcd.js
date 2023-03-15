import gameEngine from '../index.js';
import { getRandomNumber } from '../utility.js';

const gcdGame = () => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const game = () => {
    const number1 = getRandomNumber(50);
    const number2 = getRandomNumber(50);
    const question = `${'Question:'} ${number1} ${number2}`;
    let rightAnswer;

    if (number1 === number2) {
      rightAnswer = number1;
    }

    if (number1 === 0) {
      rightAnswer = number2;
    }
    if (number2 === 0) {
      rightAnswer = number1;
    }

    if (number1 > number2) {
      for (let i = number2; i >= 1; i -= 1) {
        if (number1 % i === 0 && number2 % i === 0) {
          rightAnswer = i;
          break;
        }
      }
    }

    if (number1 < number2) {
      for (let i = number1; i >= 1; i -= 1) {
        if (number1 % i === 0 && number2 % i === 0) {
          rightAnswer = i;
          break;
        }
      }
    }

    return [question, String(rightAnswer)];
  };

  gameEngine(rules, game);
};

export default gcdGame;
