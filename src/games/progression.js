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

const addMissingElement = (
  number,
  lengthOfProgression,
  stepOfProgression,
  indexOfMissing,
) => {
  const array = getProgression(number, lengthOfProgression, stepOfProgression);
  array[indexOfMissing] = '..';
  const stringWithMissNum = array.join(' ');
  return stringWithMissNum;
};

const getRightAnswer = (
  number,
  lengthOfProgression,
  stepOfProgression,
  indexOfMissing,
) => {
  const array = getProgression(number, lengthOfProgression, stepOfProgression);
  const answer = array[indexOfMissing];
  return answer;
};

const generateRound = () => {
  const number = generateRandomNumber();
  const lengthOfProgression = 10;
  const stepOfProgression = generateRandomNumber(1, 20);
  const indexOfMissing = generateRandomNumber(0, lengthOfProgression - 1);

  const progression = addMissingElement(
    number,
    lengthOfProgression,
    stepOfProgression,
    indexOfMissing,
  );

  const question = `${'Question:'} ${progression}`;

  const rightAnswer = getRightAnswer(
    number,
    lengthOfProgression,
    stepOfProgression,
    indexOfMissing,
  );

  return [question, String(rightAnswer)];
};

const runGame = () => {
  runGameEngine(gamesRule, generateRound);
};

export default runGame;
