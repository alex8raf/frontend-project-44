import gameEngine from '../index.js';
import { getRandomNumber } from '../utility.js';

const progressionGame = () => {
  const rules = 'What number is missing in the progression?';

  const game = () => {
    const lengthOfProgression = 5 + getRandomNumber(5);
    const stepOfProgression = 1 + getRandomNumber(9);
    const number = getRandomNumber(100);
    const array = [number];
    for (let i = 1; i <= lengthOfProgression; i += 1) {
      array.push(array[i - 1] + stepOfProgression);
    }
    const indexOfMissing = getRandomNumber(lengthOfProgression - 1);
    const rightAnswer = array[indexOfMissing];
    array[indexOfMissing] = '..';
    const string = array.join(' ');
    const question = `${'Question:'} ${string}`;

    return [question, String(rightAnswer)];
  };

  gameEngine(rules, game);
};

export default progressionGame;
