import runGameEngine from '../index.js';
import getRandomNumber from '../utility.js';

const rules = 'What number is missing in the progression?';

const getProgression = () => {
  const lengthOfProgression = 10;
  const minStep = 1;
  const stepOfProgression = minStep + getRandomNumber(15);
  const number = getRandomNumber();
  const array = [number];
  for (let i = 1; i < lengthOfProgression; i += 1) {
    array.push(array[i - 1] + stepOfProgression);
  }
  const indexOfMissing = getRandomNumber(lengthOfProgression - 1);
  const rightAnswer = array[indexOfMissing];
  array[indexOfMissing] = '..';
  const string = array.join(' ');
  return [string, rightAnswer];
};

const runGame = () => {
  const [string, rightAnswer] = getProgression();
  const question = `${'Question:'} ${string}`;
  return [question, String(rightAnswer)];
};

runGameEngine(rules, runGame);

export default runGame;
