import gameEngine from '../index.js';
import { getRandomNumber } from '../utility.js';

const isEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const game = () => {
    const number = getRandomNumber(100);
    let rightAnswer;
    const question = `${'Question:'} ${number}`;
    if (number % 2 === 0) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    return [question, rightAnswer];
  };

  gameEngine(rules, game);
};

export default isEven;
