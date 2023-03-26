import readlineSync from 'readline-sync';

const runGameEngine = (rules, runGame) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello'}, ${userName}!`);

  console.log(rules);

  const countOfRounds = 3;
  for (let i = 1; i <= countOfRounds; i += 1) {
    const [question, rightAnswer] = runGame();
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${rightAnswer}'.\n${"Let's try again, "}${userName}!`,
      );
    }
  }
  return console.log(`${'Congratulations, '}${userName}!`);
};

export default runGameEngine;
