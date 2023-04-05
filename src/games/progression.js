import runGameEngine from '../engine.js';
import generateRandomNumber from '../utility.js';

const gamesRule = 'What number is missing in the progression?';

const getProgression = (number, lengthOfProgression, stepOfProgression) => {
  const array = [number];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    array.push(array[i - 1] + stepOfProgression);
  }
  return array;
};

const generateRound = () => {
  const number = generateRandomNumber();
  const lengthOfProgression = 10;
  const stepOfProgression = generateRandomNumber(1, 20);
  const indexOfMissing = generateRandomNumber(0, lengthOfProgression - 1);

  const array = getProgression(number, lengthOfProgression, stepOfProgression);
  const rightAnswer = array[indexOfMissing];

  array[indexOfMissing] = '..';
  const stringWithMissNum = array.join(' ');

  const question = `${'Question:'} ${stringWithMissNum}`;

  return [question, String(rightAnswer)];
};

export default () => runGameEngine(gamesRule, generateRound);
