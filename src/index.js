import readlineSync from 'readline-sync';

const gameEngine = (rules, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`${'Hello'}, ${userName}!`);

  console.log(rules);
  let result = 0;
  for (let i = 1; i <= 3; i += 1) {
    const [question, rightAnswer] = game();
    console.log(question);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      result += 1;
    } else {
      console.log(
        `'${userAnswer}' ${'is wrong answer ;(. Correct answer was'} '${rightAnswer}'.\n${"Let's try again, "}${userName}!`,
      );
      break;
    }
  }
  if (result === 3) {
    console.log(`${'Congratulations, '}${userName}!`);
  }
};

export default gameEngine;
